import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSession, getSession } from "next-auth/react";

export default function CommentCard({
  _id,
  name,
  comment,
  age,
  sexual_orientation,
  gender,
  bipoc,
  onRemoveComment,
  date,
}) {
  const { data: session } = useSession();

  const filterNonEmptyValues = (arr) => arr.filter(Boolean);

  return (
    <>
      <CardFrame>
        <div className="demographic-data">
          {name && <p>commented by: {name}</p>}
          {age && <span className="demographic-data-tag">#{age}</span>}

          {filterNonEmptyValues(sexual_orientation).map((tag) => (
            <span key={tag} className="demographic-data-tag">#{tag}</span>
          ))}

          {filterNonEmptyValues(gender).map((tag) => (
            <span key={tag} className="demographic-data-tag">#{tag}</span>
          ))}

          {bipoc && (
            <span className="demographic-data-tag">
              {bipoc === "Yes" ? "#BIPoC" : null}
            </span>
          )}
        </div>
        <CommentStyle>
          <p className="comment">{comment}</p>
        </CommentStyle>

        {session ? <DeleteIcon onClick={() => onRemoveComment(_id)} /> : null}
        <div className="date">{date}</div>
      </CardFrame>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //     },
  //   };
  // }

  return {
    props: { session },
  };
};

const CardFrame = styled.div`
  border: 1px solid var(--accent-color); /* Use accent color */
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #d3d3d3; /* Labels color */
  background-color: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  max-width: 100%;
  overflow: hidden;

  .demographic-data {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .demographic-data-tag {
    color: var(--accent-color); /* Use accent color */
    font-weight: bold;
    border-style: none;
    padding: 0.5% 2%;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Montserrat, sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .comment {
    overflow: hidden;
    word-wrap: break-word;
    margin-bottom: 10px;
    color: #d3d3d3; /* Labels color */
  }

  .date {
    font-size: 0.8rem;
    text-align: right;
    color: #d3d3d3; /* Labels color */
  }
`;

const CommentStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: auto;
  max-width: 100%;
`;

const DeleteIcon = styled(RiDeleteBinLine)`
  width: 20px;
  height: 20px;
  color: orangered;
  align-self: flex-end;
  position: relative;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;