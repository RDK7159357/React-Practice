function ProfilePicture() {
    const url = "https://www.w3schools.com/howto/img_avatar.png";
    const handleClick=(e)=>{
      e.target.style.display = "none";
    }
    return (
      <div>
        <img onClick={(e)=>handleClick(e)} src={url} alt="Profile Picture" />
        <img style={{marginTop:"50px"}} onClick={handleClick} src={url} alt="Profile Picture" />
      </div>
    );
}
export default ProfilePicture;