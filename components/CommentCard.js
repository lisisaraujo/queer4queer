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
          {name && <p>commented by: {name} </p>}
          {age && <span className="demographic-data-tag">#{age}</span>}

{filterNonEmptyValues(sexual_orientation).map((tag) => (
      <span key={tag} className="demographic-data-tag">#{tag} </span>
    ))}

    {filterNonEmptyValues(gender).map((tag) => (
      <span key={tag} className="demographic-data-tag">#{tag} </span>
    ))}

          {bipoc && (
            <span className="demographic-data-tag">
              {bipoc === "Yes" ? "#BIPoC " : null}
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

// ... rest of the component

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
  border-color: transparent;
  border-style: none;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 1px 4px 4px 1px rgba(54, 54, 54, 0.1);
  color: #101828;
  background-color: #fcfcfd;
  max-width: 100%;
  overflow: hidden;

  .demographic-data {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px; 
  }

  .demographic-data-tag {
    color: #4d96ef;
    font-weight: bold;
    border-style: none;
    padding: 0.5% 2%; 
    color: #4d96ef;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Montserrat;
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
  }

  .date {
    font-size: 0.8rem;
    text-align: right;
    color: #101828;
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
`;
