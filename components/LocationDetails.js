import styled from "styled-components";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { MdWrongLocation } from "react-icons/md";
import Header from "./Header";
import { useSession, getSession } from "next-auth/react";
import LocationHeaderDetails from "./LocationHeaderDetails";
import ModalCommentForm from "./Modals/ModalCommentForm";
import useSWR, { mutate } from "swr";
import ModalCommentFilter from "./Modals/ModalCommentFilter";
import { FaSortDown, FaSortUp } from "react-icons/fa";

export default function LocationDetails({ specificLocation }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const iconStylesDelete = { color: "red", fontSize: "2em", cursor: "pointer" };
  const backgroundImageUrl =
    "https://res.cloudinary.com/dvaayrczh/image/upload/v1695840462/backgroundImageMap_wcqxi9.png"; // Replace with the actual URL

  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const [filteredComments, setFilteredComments] = useState([]);
  const [selectedAgeOptions, setSelectedAgeOptions] = useState([]);
  const [selectedGenderOptions, setSelectedGenderOptions] = useState([]);
  const [selectedsexualOrientationOption, setSelectedsexualOrientationOption] =
    useState([]);
  const [selectedBipocOption, setSelectedBipocOption] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const iconStyles = { color: "#101828", fontSize: "1.8em", cursor: "pointer" };
  const iconStylesClicked = { color: "#4d96ef", fontSize: "1.8em", cursor: "pointer" };

  // load comments function
  async function loadComments() {
    setLoading(true);
    try {
      const data = await fetch(`/api/comments/${id}`);
      const commentsData = await data.json();
      setComments(commentsData);
      setLoading(false);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  }

  useEffect(() => {
    loadComments();
  }, [comments]);

  useEffect(() => {
    setFilteredComments(comments);
  }, [comments]);

  // clear filters
  const clearFilter = () => {
    setSelectedAgeOptions([]);
    setSelectedGenderOptions([]);
    setSelectedsexualOrientationOption([]);
    setSelectedBipocOption([]);
  };

  // get filtered list of comments
  const getFilteredList = () => {
    let filtered = [...filteredComments];

    if (selectedAgeOptions.length > 0) {
      filtered = filtered.filter((comment) =>
        selectedAgeOptions.some((option) => option.value === comment.age)
      );
    }

    if (selectedGenderOptions.length > 0) {
      filtered = filtered.filter((comment) =>
        selectedGenderOptions.some((option) =>
          comment.gender.includes(option.value)
        )
      );
    }

    if (selectedsexualOrientationOption.length > 0) {
      filtered = filtered.filter((comment) =>
        selectedsexualOrientationOption.some((option) =>
          comment.sexual_orientation.includes(option.value)
        )
      );
    }

    if (selectedBipocOption.length > 0) {
      filtered = filtered.filter((comment) =>
        selectedBipocOption.some((option) => option.value === comment.bipoc)
      );

      if (selectedBipocOption === null) {
        setSelectedBipocOption("No");
      }
    }

    return filtered;
  };

  let filteredList = getFilteredList();

  // sort comments by date
  const sortedList = sortOrder === "asc" ? [...filteredList] : [...filteredList].reverse();
  // remove comment
  async function handleRemoveComment(id) {
    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await response.json();
      } else {
        console.error(`Error: ${response.status}`);
      }

      loadComments();
      mutate(`/api/comments/${id}`);
    } catch (error) {
      console.error("Error removing comment:", error);
    }
  }

  async function handleRemoveLocation(id) {
    try {
      const response = await fetch(`/api/locations/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await response.json();
      } else {
        console.error(`Error: ${response.status}`);
      }

      router.push("/");
      loadLocations();
      locations.mutate();
    } catch (error) {
      console.error("Error removing location:", error);
    }
  }

  if (specificLocation) {
    const { name, lngLat, type, address, city, postcode } = specificLocation;

    return (
      <>
        <StyledBackground backgroundImageUrl={backgroundImageUrl}>
          <Header>{name}</Header>
          <BlurredContentWrapper>
            <StyledLocationContainer>
              <LocationHeaderDetails specificLocation={specificLocation} />
              <TitleHeader>
                <h3>Comments</h3>
                <SortIcons>
                  <SortButton
                    active={sortOrder === "asc"}
                    onClick={() => setSortOrder("asc")}
                  >
                    <FaSortUp />
                  </SortButton>
                  <SortButton
                    active={sortOrder === "desc"}
                    onClick={() => setSortOrder("desc")}
                  >
                    <FaSortDown />
                  </SortButton>
                </SortIcons>
                <ModalContainer>
                  <ModalCommentForm
                    loadComments={loadComments}
                    setSelectedAgeOptions={setSelectedAgeOptions}
                    setSelectedGenderOptions={setSelectedGenderOptions}
                    setSelectedsexualOrientationOption={
                      setSelectedsexualOrientationOption
                    }
                    setSelectedBipocOption={setSelectedBipocOption}
                    selectedsexualOrientationOption={
                      selectedsexualOrientationOption
                    }
                    selectedAgeOptions={selectedAgeOptions}
                    selectedGenderOptions={selectedGenderOptions}
                    selectedBipocOption={selectedBipocOption}
                  />
                  <ModalCommentFilter
                    setSelectedAgeOptions={setSelectedAgeOptions}
                    setSelectedGenderOptions={setSelectedGenderOptions}
                    setSelectedsexualOrientationOption={
                      setSelectedsexualOrientationOption
                    }
                    setSelectedBipocOption={setSelectedBipocOption}
                    selectedsexualOrientationOption={
                      selectedsexualOrientationOption
                    }
                    selectedAgeOptions={selectedAgeOptions}
                    selectedGenderOptions={selectedGenderOptions}
                    selectedBipocOption={selectedBipocOption}
                    getFilteredList={getFilteredList}
                    clearFilter={clearFilter}
                    loadComments={loadComments}
                  />
                </ModalContainer>
              </TitleHeader>
              {sortedList.map((item) => {
                const {
                  comment,
                  age,
                  sexual_orientation,
                  gender,
                  bipoc,
                  _id,
                  date,
                  name,
                } = item;

                return (
                  <CommentCardWrapper key={_id}>
                    <CommentCard
                      on={() => router.push(`/${id}`)}
                      name={name}
                      comment={comment}
                      age={age}
                      gender={gender}
                      bipoc={bipoc}
                      date={date}
                      sexual_orientation={sexual_orientation}
                      onRemoveComment={() => handleRemoveComment(_id)}
                      setSelectedAgeOptions={setSelectedAgeOptions}
                      setSelectedGenderOptions={setSelectedGenderOptions}
                      setSelectedsexualOrientationOption={
                        setSelectedsexualOrientationOption
                      }
                      setSelectedBipocOption={setSelectedBipocOption}
                      selectedsexualOrientationOption={
                        selectedsexualOrientationOption
                      }
                      selectedAgeOptions={selectedAgeOptions}
                      selectedGenderOptions={selectedGenderOptions}
                      selectedBipocOption={selectedBipocOption}
                    />
                  </CommentCardWrapper>
                );
              })}
              {session ? (
                <DeleteLocation>
                  <h4>Delete this location</h4>
                  <MdWrongLocation
                    style={iconStylesDelete}
                    onClick={() => {
                      handleRemoveLocation(id);
                    }}
                  />
                </DeleteLocation>
              ) : null}
            </StyledLocationContainer>
          </BlurredContentWrapper>
        </StyledBackground>
      </>
    );
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: { session },
  };
};

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.backgroundImageUrl}) lightgray 50% / cover no-repeat;
`;

const StyledLocationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d3d3d3; /* Labels color */
  padding: 20px;
`;

const TitleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  font-weight: bold;
`;

const SortIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const SortButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => (props.active ? "#4d96ef" : "#101828")};
  font-size: 1.8em;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #4d96ef;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CommentCardWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const DeleteLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10vh;
  justify-content: center;
`;

const BlurredContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  padding: 20px;
  overflow: auto;
`;