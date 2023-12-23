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

export default function LocationDetails({ loadLocations, specificLocation }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const locations = useSWR("/api/locations");
  const iconStylesDelete = { color: "red", fontSize: "2em" };
  const backgroundImageUrl =
    "https://res.cloudinary.com/dvaayrczh/image/upload/v1695840462/backgroundImageMap_wcqxi9.png"; // Replace with the actual URL

  const { data: session } = useSession();

  const router = useRouter();
  const { id } = router.query;
  //////////////////////

  const [filteredComments, setFilteredComments] = useState([]);
  const [selectedAgeOptions, setSelectedAgeOptions] = useState([]);
  const [selectedGenderOptions, setSelectedGenderOptions] = useState([]);
  const [selectedsexualOrientationOption, setSelectedsexualOrientationOption] =
    useState([]);
  const [selectedBipocOption, setSelectedBipocOption] = useState([]);

  function loadComments() {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch(`/api/comments/${id}`);
      const commentsData = await data.json();
      setComments(commentsData);
      console.log("CommentsData", commentsData);
      setLoading(false);
      if (isLoading) {
        return <h1>Comments Loading...</h1>;
      }
      if (!commentsData) {
        return <h1>No data</h1>;
      }
    };
    fetchData().catch(console.error);
  }

  useEffect(() => {
    loadComments();
  }, [id]);

  useEffect(() => {
    setFilteredComments(comments);
  }, [comments]);

  const clearFilter = () => {
    setSelectedAgeOptions([]);
    setSelectedGenderOptions([]);
    setSelectedsexualOrientationOption([]);
    setSelectedBipocOption([]);
  };


  const getFilteredList = () => {
    let filtered = [...filteredComments];


    if (selectedAgeOptions.length > 0) {
      filtered = filtered.filter((comment) =>
        selectedAgeOptions.some((option) => option.value === comment.age)
      );
    }
    console.log("Selected AGE Options: ", selectedAgeOptions)
 
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

  //////////////////////

  async function handleRemoveComment(id) {
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
  }

  async function handleRemoveLocation(id) {
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
  }

  if (specificLocation) {
    const { name, lngLat, type, address, city, postcode } = specificLocation;

    return (
      <>
        <StyledBackground backgroundImageUrl={backgroundImageUrl}>
          <Header>{name}</Header>
          <BlurredContentWrapper>
            <StyledLocationContainer>
              <div className="location-container">
                <LocationHeaderDetails specificLocation={specificLocation} />
                <div className="title-header">
                  <h3>Comments</h3>
                  <div className="modal">
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
                  </div>
                </div>
                {/* <CommentsContainer> */}
                {filteredList.map((item) => {
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
                    <div className="comment-card" key={_id}>
                      <CommentCard
                        onClick={() => router.push(`/${id}`)}
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
                    </div>
                  );
                })}
                {/* </CommentsContainer> */}
                {session ? (
                  <div className="delete-location">
                    <h4>Delete this location</h4>
                    <MdWrongLocation
                      style={iconStylesDelete}
                      onClick={() => {
                        handleRemoveLocation(id);
                      }}
                    />
                  </div>
                ) : null}
              </div>
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
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: url(${(props) => props.backgroundImageUrl}),
    lightgray 50% / cover no-repeat;
`;

const StyledLocationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: #101828;
  h3 {
    text-align: center;
  }
  .title-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 5% 0%;
    font-weight: bold;
  }
  .location-container {
    display: flex;
    flex-direction: column;
    position: relative;
    align-content: center;
    width: 95vw;
    margin: 0 auto;
  }
  .modal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* margin-left: 5%; */
    width: 25%;
  }

  .delete-location {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10vh;
    justify-content: center;
  }
`;

const BlurredContentWrapper = styled.div`
  background-color: rgba(252, 252, 253, 0.9);
  padding: 20px;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
const CommentsContainer = styled.div`
  margin-bottom: 5vh;
  flex-grow: 1;
  overflow: auto;
`;
