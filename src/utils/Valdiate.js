export const checkValidData = (email, password) => {
  let isEmaiValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  let isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{};:,/]).{8,}$/.test(
      password
    );

  if (!isEmaiValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
};
