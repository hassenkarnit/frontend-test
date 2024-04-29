export const getSelf = async (token: TUserType) => {
  const {
    USER_WITH_ONE_SUBSCRIPTION,
    USER_WITHOUT_SUBSCRIPTION,
    USER_WITH_MULTIPLE_SUBSCRIPTION,
  } = await import('@/data/mock/user');

  switch (token) {
    case TUserType.ONE_SUBSCRIPTION:
      return USER_WITH_ONE_SUBSCRIPTION;
    case TUserType.MULTIPLE_SUBSCRIPTION:
      return USER_WITH_MULTIPLE_SUBSCRIPTION;
    default:
      return USER_WITHOUT_SUBSCRIPTION;
  }
};

export enum TUserType {
  ONE_SUBSCRIPTION = 'ONE_SUBSCRIPTION',
  WITHOUT_SUBSCRIPTION = 'WITHOUT_SUBSCRIPTION',
  MULTIPLE_SUBSCRIPTION = 'MULTIPLE_SUBSCRIPTION',
}
