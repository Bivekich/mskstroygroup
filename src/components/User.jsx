import { Link, useNavigate } from "react-router-dom";

const User = () => {
  const user = {
    name: "Имя",
    phone: "999 999-99-99",
    avatar: "/avatar.png",
  };

  const navigate = useNavigate();

  function deleteToken() {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  }

  return (
    <div className="bg-[#DFDFDF] ">
      <div className="w-[87%] m-auto py-20 text-[25px]">
        <div className="w-5/12 h-[400px] bg-white p-2 flex flex-col justify-between">
          <div className="flex">
            <img
              src={user.avatar}
              alt="Аватар"
              className="bg-[#DFDFDF] p-3 rounded-full"
            />
            <h1 className="font-bold">{user.name}</h1>
          </div>
          <div className="flex justify-between items-center px-4">
            <h1>
              Телефон
              <b>+7 {user.phone}</b>
            </h1>
            <button className="underline" onClick={deleteToken}>
              Выйти
            </button>
            <Link to="/Admin">
              <div>Admin</div>
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
