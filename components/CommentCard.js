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
    <CardFrame>
      <DemographicData>
        {age && <Tag>#{age}</Tag>}
        {filterNonEmptyValues(sexual_orientation).map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
        {filterNonEmptyValues(gender).map((tag) => (
          <Tag key={tag}>#{tag}</Tag>
        ))}
        {bipoc && bipoc === "Yes" && <Tag>#BIPoC</Tag>}
      </DemographicData>
      <CommentStyle>
        <Comment>{comment}</Comment>
      </CommentStyle>
      {session && <DeleteIcon onClick={() => onRemoveComment(_id)} />}
      <Date>{date}</Date>
    </CardFrame>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: { session },
  };
};

const CardFrame = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  background-color: rgba(28, 28, 28, 0.85);
  color: #F5A9B8; /* Labels color */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DemographicData = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const Author = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 600;
`;

const Tag = styled.span`
  color: var(--accent-color); /* Use accent color */
  font-weight: 600;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 12px; /* Rounded tags for a modern look */
  background-color: rgba(255, 255, 255, 0.1); /* Light background for tags */
  margin-right: 5px;
  margin-bottom: 5px;
`;

const CommentStyle = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Comment = styled.p`
  overflow-wrap: break-word;
  margin-bottom: auto; /* Allow the comment to take available space */
  font-size: 14px;
  line-height: 1.5;
`;

const Date = styled.div`
  font-size: 12px;
  text-align: right;
  color: #a9a9a9;
`;

const DeleteIcon = styled(RiDeleteBinLine)`
  width: 20px;
  height: auto; /* Maintain aspect ratio */
  color: orangered;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    color: red; /* Subtle hover effect */
    transform: scale(1.1); /* Slightly enlarge on hover for emphasis */
    transition: color 0.2s ease-in-out, transform 0.2s ease-in-out; /* Smooth transition */
  }
`;