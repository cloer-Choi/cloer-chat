export const errorMessage = (message) => message;
export const successMessage = (message, result) => ({ ...message, result });

const JsonMessage = (isSuccess, code, message) => ({ isSuccess, code, message });
export const baseMessage = {
  // 2XXX: Succcess
  SUCCESS_INSERT_USER: JsonMessage(true, 2000, 'It has succeeded to create a new user.'),
  SUCCESS_SIGNIN: JsonMessage(true, 2001, 'It has succeeded to sign in.'),
  SUCCESS_SIGNOUT: JsonMessage(true, 2002, 'It has succeeded to sign out.'),
  SUCCESS_INSERT_ROOM: JsonMessage(true, 2003, 'It has succeeded to create a new room'),
  SUCCESS_JOIN_ROOM: JsonMessage(true, 2004, 'It has succeeded to join the room.'),
  SUCCESS_LEAVE_ROOM: JsonMessage(true, 2005, 'It has succeeded to leave the room.'),
  SUCCESS_GET_ALL_ROOMS: JsonMessage(true, 2006, 'It has succeeded to get all rooms.'),
  SUCCESS_REJOIN_USER: JsonMessage(true, 2007, 'It has succeeded to rejoin the user.'),
  SUCCESS_GET_USER_INFO: JsonMessage(true, 2008, 'It has succeeded to get user info.'),

  // 3XXX: Validation error
  INVALID_EMAIL: JsonMessage(false, 3000, 'Wrong or invalid e-mail address.'),
  INVALID_NICKNAME: JsonMessage(false, 3001, 'Nickname requires minimum 4 and maximum 10 characters.'),
  INVALID_PASSWORD: JsonMessage(false, 3002, 'Password must contain at least 1 lowercase, uppercase, numeric, special character and be a 4 charctors or longer.'),

  EXISTING_EMAIL: JsonMessage(false, 3003, 'An account already exists with that e-mail address.'),
  EXISTING_NICKNAME: JsonMessage(false, 3004, 'An account already exists with that nickaname.'),

  CANNOT_FIND_EMAIL: JsonMessage(false, 3005, 'We cannot find an account with that e-mail address'),
  CANNOT_FIND_USERID: JsonMessage(false, 3006, 'We cannot find an account with that userId'),
  INCORRECT_PASSWORD: JsonMessage(false, 3007, 'Your password is incorrect'),
  // DORMANT_ACCOUNT: JsonMessage(false, 3005, 'Your account is a dormant account.'),

  INVALID_TITLE: JsonMessage(false, 3008, 'Title requires minimum 4 and maximum 24 characters.'),
  INVALID_ROOM_PASSWORD: JsonMessage(false, 3008, 'Password requires minimum 1 character.'),
  EXISTING_TITLE: JsonMessage(false, 3004, 'A room already exists with that title.'),
  NOT_EXISTING_USER: JsonMessage(false, 3005, 'There is no user who has that userId.'),
  NOT_EXISTING_ROOM: JsonMessage(false, 3006, 'There is no room that has that roomId.'),

  // 4XXX: Wrong request
  LOGIN_REQUIRED: JsonMessage(false, 4000, 'Must be logged in.'),
  LOGOUT_REQUIRED: JsonMessage(false, 4001, 'Must be logged out'),
  WRONG_PATH: JsonMessage(false, 4004, 'Wrong path.'),
  USER_IN_ROOM: JsonMessage(false, 4005, 'The user is in the room.'),
  USER_NOT_IN_ROOM: JsonMessage(false, 4006, 'The user is not in the room.'),
  // EXPIRED_TOKEN: JsonMessage(false, 4007, 'Token is expired.'),
  // INVALID_TOKEN: JsonMessage(false, 4007, 'Token is invalid.'),

  // 5:XXX Error
  DB_ERROR: JsonMessage(false, 5000, 'Database Error!'),
  SERVER_ERROR: JsonMessage(false, 5001, 'Server Error!'),
};
