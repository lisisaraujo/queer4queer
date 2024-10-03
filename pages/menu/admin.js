import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import styled from "styled-components";
import Header from "../../components/Header";

export default function Account() {
  const { data: session, status } = useSession();
  const id = session?.user?.email;

  if (status === "authenticated") {
    return (
      <>
        <title>Admin</title>
        <Header>Admin</Header>
        <StyledAdminPage>
          <div className="home">
            <p>Welcome {session.user.name}. You are currently logged in.</p>
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        </StyledAdminPage>
      </>
    );
  } else {
    return (
      <>
        <Header>Admin</Header>
        <StyledAdminPage>
          <div className="sign-in">
            <p>You are not signed in</p>
          </div>
        </StyledAdminPage>
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

const StyledAdminPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  color: #d3d3d3; /* Labels color */
  text-align: center;

  .home, .sign-in {
    max-width: 600px;
    background: rgba(255, 255, 255, 0.1); /* Light background with opacity */
    padding: 20px;
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  }

  p {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    line-height: 1.6;
  }

  button {
    width: 120px;
    height: 40px;
    background-color: rgba(75, 0, 130, 0.8); /* Accent color */
    color: whitesmoke;
    border-radius: 8px; /* Rounded corners */
    border: none;
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      background-color: rgba(75, 0, 130, 1); /* Darker accent color on hover */
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
    }
  }
`;