import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Avatar from "react-avatar-edit";
import { useState } from "react";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [dialogs, setDialogs] = useState(false)
  const [imageCrop, setImageCrop] = useState(false);
  const [storeImage, setStoreImage] = useState([])

  const profileImageShow = storeImage.map((item) => item.imageCrop);

  const onClose = () => {
    setImageCrop(null)
  };

  const onCrop = (view) => {
    setImageCrop(view);
  };

  const saveImage = () => {
    setStoreImage([...storeImage, {imageCrop}])
    setDialogs(false)
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl">Update profile</h2>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img
            onClick={() => setDialogs(true)}
            src={profileImageShow.length ? profileImageShow : user.photoURL}
          />
        </div>
        <br />
      </div>
      <div>
        <Dialog
          visible={dialogs}
          header={() => <p className="text-2xl font-semibold">Change Photo</p>}
          onHide={() => setDialogs(false)}
        >
          <div className="flex flex-col items-center">
            <Avatar
              width={400}
              height={300}
              onCrop={onCrop}
              onClose={onClose}
              
              
            />
            <div className="flex flex-col items-center w-12 mt-5">
              <div className="flex justify-around w-12 mt-4">
                <Button
                onClick={saveImage}
                label="Save"
                icon="pi pi-check"
                />
              </div>
            </div>
          </div>
        </Dialog>
        {/* <InputText
          type="file"
          accept="image/*"
          style={{display: "none"}}
          onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substring(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        /> */}
      </div>
    </div>
  );
};

export default UpdateProfile;
