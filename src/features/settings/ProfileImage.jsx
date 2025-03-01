const ProfileImage = () => {
  return (
    <div style={{ position: "relative", width: "100px", height: "100px" }}>
      <img
        src="src/assets/GuestImg.png" 
        alt="Profile Picture"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #ddd",
        }}
      />
    </div>
  );
};

export default ProfileImage;
