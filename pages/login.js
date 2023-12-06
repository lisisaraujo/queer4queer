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
  color: black;
  margin: 30% auto;
  font-size: 1em;
  button {
    width: 50px;
    height: 40px;
    align-self: center;
    background-color: rgba(1, 72, 224, 0.7);
    box-shadow: 0px 0px 5px 3px rgba(90, 90, 90, 0.75);

    color: whitesmoke;
    border-radius: 10px;
    margin-bottom: 10%;
    border-style: none;
    margin-top: 30px;
    &:hover {
      box-shadow: 0px 0px 18px 2px rgba(125, 125, 125, 0.75);
    }
  }
`;
