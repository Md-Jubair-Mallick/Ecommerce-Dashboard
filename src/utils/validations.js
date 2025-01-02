export const validateRegistration = (userName, email, password, role) => {
  if (!userName || !email || !password || !role) {
    return { status: false, message: "All fields are required" };
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@.])[A-Za-z\d@.]{6,}$/;
  const roleRegex = /^(viewer|editor)$/;
  const userNameRegex = /^[a-zA-Z0-9\s]{3,}$/;
  const errors = [];

  if (!emailRegex.test(email)) {
    errors.push("Invalid email format");
  }

  if (!passwordRegex.test(password)) {
    errors.push(
      "Password must be at least 6 characters long and contain at least one letter and one number"
    );
  }

  if (!roleRegex.test(role)) {
    errors.push('Invalid role. Only "viewer" and "editor" are allowed');
  }

  if (!userNameRegex.test(userName)) {
    errors.push(
      "Username must be at least 3 characters long and contain only letters and numbers"
    );
  }

  return errors.length > 0
    ? { status: false, message: errors.join(", ") }
    : { status: true };
};

export const validateLogin = ( email, password ) => {
  if (!email || !password ) {
    return { status: false, message: "All fields are required" };
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@.])[A-Za-z\d@.]{6,}$/;
  const errors = [];

  if (!emailRegex.test(email)) {
    errors.push("Invalid email format");
  }

  if (!passwordRegex.test(password)) {
    errors.push(
      "Password must be at least 6 characters long and contain at least one letter and one number"
    );
  }

  return errors.length > 0
    ? { status: false, message: errors.join(", ") }
    : { status: true };
};

