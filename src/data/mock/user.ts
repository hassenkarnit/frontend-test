export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  gender: 'M' | 'F';
  email: string;
  subscriptions: string[];
}

const BASE_USER: Omit<IUser, 'subscriptions'> = {
  id: '507f1f77bcf86cd799439011',
  firstName: 'Jamie',
  lastName: 'Doe',
  gender: 'M',
  email: 'jamie.doe@example.com',
};

export const USER_WITH_ONE_SUBSCRIPTION = {
  ...BASE_USER,
  subscriptions: ['RIGHT_1'],
} satisfies IUser;

export const USER_WITHOUT_SUBSCRIPTION = {
  ...BASE_USER,
  subscriptions: [],
} satisfies IUser;

export const USER_WITH_MULTIPLE_SUBSCRIPTION = {
  ...BASE_USER,
  subscriptions: ['RIGHT_1', 'RIGHT_2'],
} satisfies IUser;
