export default function Register() {
  return (
    <div style={{ padding: 50 }}>
      <h1>🔥 REGISTER PAGE WORKING</h1>
    </div>
  );
  useEffect(() => {
  if (token) navigate("/app/dashboard");
}, [token]);

}

