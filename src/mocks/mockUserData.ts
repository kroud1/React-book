// export const mockUser = {
//   userName: "Seung Ah",
//   userEmail: "qwe123@naver.com",
//   userPhone: "010-1234-5678",
// };

type User = {
  userId: string;
  userPassword: string;
  userEmail: string;
  userAddress: string;
  userAddressDatail: string;
  userName: string;
  userPhone: string;
  userKidBirth: string;
  userWithdraw?: string;
};

const mockUserData: User[] = [
  {
    userId: "qwe123",
    userPassword: "qweq23",
    userEmail: "23dsf@eqw.wee",
    userAddress: "부산시",
    userAddressDatail: "부산진구",
    userName: "seungah",
    userPhone: "010-1111-2222",
    userKidBirth: "2024-03-06",

  },
  {
    userId: "qwe1ggg23",
    userPassword: "qweqsdf23",
    userEmail: "2235263dsf@eqw.wee",
    userAddress: "부산시",
    userAddressDatail: "부산진구",
    userName: "Bseungah",
    userPhone: "010-1111-2222",
    userKidBirth: "2024-03-06",
  },
  {
    userId: "qwe123",
    userPassword: "qweq23",
    userEmail: "23dsf@eqw.wee",
    userAddress: "부산시",
    userAddressDatail: "부산진구",
    userName: "Cseungah",
    userPhone: "010-1111-2222",
    userKidBirth: "2024-03-06",
  },
]

export default mockUserData;