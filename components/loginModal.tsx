import React, { Children, useState } from "react";
import { Modal, ModalContent } from "@heroui/modal";
import { Tabs, Tab } from "@heroui/tabs";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { FiCamera, FiUser } from "react-icons/fi";

const LoginModal = ({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen?: any;
  onClose: any;
}) => {
  const [imageUrl, setImageUrl] = useState("");
  const [username, setUsername] = useState("");
  return (
    <Modal
      backdrop={"blur"}
      //   className="bg-"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalContent>
        {(onClose) => (
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options" className="shadow-none">
              <Tab key="Collector" title="Collector">
                <Card className="p-6 shadow-none rounded-lg max-w-sm mx-auto">
                  {/* Profile Image Preview */}
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={imageUrl || "/default-avatar.png"} // Default if no input
                      alt="Profile Preview"
                      className="w-24 h-24 rounded-full border border-gray-200 object-cover mb-5"
                    />

                    {/* Image URL Input */}
                    <Input
                      //   label="Image Url"
                      placeholder="Enter Image URL"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      type="text"
                      startContent={<FiCamera className="text-gray-500" />}
                    />

                    <Input
                      //   label="Username"
                      type="text"
                      placeholder="Enter Username"
                      value={username}
                      startContent={<FiUser className="text-gray-500" />}
                      onChange={(e) => setUsername(e.target.value)}
                    />

                    {/* Submit Button */}
                    <Button
                      color="secondary"
                      onPress={onClose}
                      className="w-full py-6 mt-5"
                    >
                      Submit Profile
                    </Button>
                  </div>
                </Card>
              </Tab>
              <Tab key="Creator" title="Creator">
                <Card className="p-6 shadow-none rounded-lg max-w-sm mx-auto">
                  {/* Profile Image Preview */}
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={imageUrl || "/default-avatar.png"} // Default if no input
                      alt="Profile Preview"
                      className="w-24 h-24 rounded-full border border-gray-200 object-cover mb-5"
                    />

                    {/* Image URL Input */}
                    <Input
                      //   label="Image Url"
                      placeholder="Enter Image URL"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      type="text"
                      startContent={<FiCamera className="text-gray-500" />}
                    />

                    <Input
                      //   label="Username"
                      type="text"
                      placeholder="Enter Username"
                      value={username}
                      startContent={<FiUser className="text-gray-500" />}
                      onChange={(e) => setUsername(e.target.value)}
                    />

                    {/* Submit Button */}
                    <Button
                      color="secondary"
                      onPress={onClose}
                      className="w-full py-6 mt-5"
                    >
                      Submit Profile
                    </Button>
                  </div>
                </Card>
              </Tab>
            </Tabs>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
