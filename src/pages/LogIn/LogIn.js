import "./LogIn.css";

const btn = [
  {
    img: "./img/Authentication/google.png",
    content: "Đăng nhập với Google",
    to: "http://www.google.com",
  },
  {
    img: "./img/Authentication/facebook.png",
    content: "Đăng nhập với Facebook",
    to: "http://www.facebook.com",
  },
];

const form = [
  {
    placeholder: "Email",
    type: "text",
  },
  {
    placeholder: "Mật khẩu",
    type: "password",
  },
];

function LogIn() {
  return (
    <div className="w-[1160px] m-auto">
      <div className="header flex items-center justify-between h-[100px]">
        <a href="/">
          <img src="./img/logo.svg" alt="home-page" />
        </a>
        <div>
          <p className="text-lg font-medium">
            Bạn chưa có tài khoản?{" "}
            <span className="text-[var(--primary)] font-bold">
              <a href="/register">Đăng kí ngay!</a>
            </span>
          </p>
        </div>
      </div>
      <div className="container flex justify-between items-center py-[100px]">
        <div>
          <p className="text-6xl font-bold mb-12">Đăng nhập</p>
          {btn.map((item) => (
            <div className="">
              <a
                href={item.to}
                className="flex justify-center gap-4 items-center text-xl font-bold border-[1px] border-black border-solid rounded-xl w-[375px] h-[60px] mb-5 hover:shadow-[0_0_6px_0_rgba(96,79,201,.5019607843137255)]"
              >
                <img src={item.img} alt="sign in" />
                <p>{item.content}</p>
              </a>
            </div>
          ))}
          <div className="relative">
            <p className="signIn text-[#5a5a5a] text-xl text-center my-12">
              hoặc đăng nhập với email
            </p>
          </div>
          <div className="flex flex-col">
            {form.map((item) => (
              <input
                type={item.type}
                placeholder={item.placeholder}
                className="border-[1px] border-black border-solid rounded-xl p-3 mb-5 text-lg hover:shadow-[0_0_6px_0_rgba(96,79,201,.5019607843137255)]"
              />
            ))}
          </div>
          <button className="w-[100%] rounded-xl text-[var(--white)] text-xl font-bold bg-[#1325b9] py-6 mb-5">
            Đăng nhập
          </button>
          <a href="/quen-mat-khau">
            <span className="text-lg font-medium mb-5">Quên mật khẩu?</span>
          </a>
        </div>
        <div>
          <img
            src="./img/Authentication/sign-in.png"
            alt="sign in"
            className="w-[675px]"
          />
        </div>
      </div>
    </div>
  );
}

export default LogIn;

// style span :
