import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAccessToken } from "@shared/spotify/index";

type AsyncRefreshAccessToken = {
  status: "loading" | "error" | "success";
};
const Callback = () => {
  const [searchParams] = useSearchParams();

  const [refreshStatus, setRefreshStatus] = useState<AsyncRefreshAccessToken>({
    status: "loading",
  });

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const accessToken = searchParams.get("code");

        if (accessToken) {
          await getAccessToken(accessToken);
          navigate("/calc");
          return;
        }

        navigate("/");
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      {refreshStatus.status === "loading" && <p>Carregando...</p>}
      {refreshStatus.status === "error" && <p>Erro ao fazer login</p>}
    </div>
  );
};

export default Callback;
