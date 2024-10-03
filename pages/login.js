import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "../components/Header.js";
import AuthForm from "../components/Forms/AuthForm.js";

export default function Login() {
  const { data: session } = useSession();

  const router = useRouter();

  if (session) {
    return (
      <>
        <title>Login</title>
        <Header>Login</Header>
        <StyledAdminPage>
          <p>Welcome, {session.user.name}</p>
          <img
            src={session.user.image}
            alt="user image"
            style={{ borderRadius: "50px" }}
          />
          <button onClick={() => signOut()}>Sign out</button>
        </StyledAdminPage>
      </>
    );
  } else {
    return (
      <>
        <Header>Login</Header>
        <StyledAdminPage>
          <p>You are not signed in</p>
          <AuthForm />
          {/* <button onClick={() => signIn()}>Sign in</button> */}
        </StyledAdminPage>
      </>
    );
  }
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

  p {
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    line-height: 1.6;
  }

  img {
    border-radius: 50px;
    margin-top: 20px;
    width: 100px;
    height: 100px;
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