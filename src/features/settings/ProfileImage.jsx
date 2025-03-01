const ProfileImage = () => {
  return (
    <div className="relative w-24 h-24">
      <img
        src="src/assets/GuestImg.png"
        alt="Profile Picture"
        className="w-full h-full rounded-full object-cover border-2 border-gray-300"
      />
    </div>
  );
};

export default ProfileImage;
