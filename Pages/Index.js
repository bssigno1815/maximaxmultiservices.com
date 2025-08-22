export default function Home() {
  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      backgroundColor: "#000", 
      color: "#FFA500",
      flexDirection: "column"
    }}>
      <img 
        src="/logo.png" 
        alt="BSS Logo" 
        style={{ width: "200px", marginBottom: "20px" }} 
      />
      <h1>BRIYANT SOLÈY SIGNO 1815</h1>
      <p>Yon motè nèf, yon sèl kout klé san bri</p>
    </div>
  );
}
