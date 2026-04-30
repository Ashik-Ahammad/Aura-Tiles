import { Toaster } from "sonner";


const AuthLayout = ({ children }) => {
  return (
    <div >
      {children}
       <Toaster/>
    </div>
  );
};

export default AuthLayout;
