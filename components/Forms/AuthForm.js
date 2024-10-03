import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import styled from "styled-components";

// async function createUser(name, email, password) {
//   const response = await fetch("api/auth/admin", {
//     method: "POST",
//     body: JSON.stringify({ name, email, password }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(data.message || "Something went wrong!");
//   }
//   return data;
// }

export default function AuthForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result.error) {
        setTimeout(() => {
          router.replace("/");
          setIsButtonLoading(false);
        }, 2000);
      } else {
        try {
          // const result = await createUser(
          //   enteredName,
          //   enteredEmail,
          //   enteredPassword
          // );
          window.alert("Login failed. You don't have admin access.");
          console.log(result);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  return (
    <>
      <StyledHeader>
        <p>Admin access only!</p>
      </StyledHeader>
      <Wrapper>
        {/* <StyledHeader>{isLogin ? "Login" : "Sign Up"}</StyledHeader> */}
        <EntryForm onSubmit={submitHandler}>
          <StyledLabel htmlFor="name" name="name" id="name">
            Your name
          </StyledLabel>
          <StyledInput
            type="name"
            name="name"
            autoComplete="off"
            aria-label="Enter text"
            placeholder="your name"
            required
            ref={nameInputRef}
          />
          <StyledLabel htmlFor="email" name="email" id="email">
            Your Email
          </StyledLabel>
          <StyledInput type="email" id="email" required ref={emailInputRef} />
          <StyledLabel htmlFor="password" name="password" id="password">
            Your Password
          </StyledLabel>
          <StyledInput
            type="password"
            name="password"
            aria-label="Enter your password"
            placeholder="*********"
            required
            ref={passwordInputRef}
          />

          <ButtonWrapper>
            {!isButtonLoading ? (
              <>
                <Button>Login</Button>
                {/* <Button>{isLogin ? "Login" : "Create Account"}</Button>
              <Button type="button" onClick={switchAuthModeHandler}>
                {isLogin ? "Create new account" : "Login with existing account"}
              </Button> */}
              </>
            ) : (
              null
            )}
          </ButtonWrapper>
        </EntryForm>
      </Wrapper>
    </>
  );
}

const StyledLabel = styled.label`
  margin-top: 20px;
  padding-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  font-size: 10pt;
  color: #d3d3d3; /* Labels color */
`;

const Wrapper = styled.div`
  border-radius: 20px;
  border: 1px solid #d3d3d3; /* Border color */
  background-color: rgba(28, 28, 28, 0.9); /* Base color with opacity */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const EntryForm = styled.form`
  padding: 10%;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.h2`
  color: #d3d3d3; /* Labels color */
  font-size: 14pt;
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 3px solid #d3d3d3; /* Border color */
  padding: 5px 10px;
  outline: none;
  background-color: transparent;
  color: #d3d3d3; /* Text color */
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  background-color: rgba(75, 0, 130, 0.8); /* Accent color */
  color: whitesmoke;
  border-radius: 8px; /* Rounded corners */
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: rgba(75, 0, 130, 1); /* Darker accent color on hover */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;