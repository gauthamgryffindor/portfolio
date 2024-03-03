import "./Project.css";

const project = () => {
  return (
    <div className="sample" id="project">
      <div className="pro">
        <span className="project">Projects</span>

        <span className="pt">ChatApp</span>
        <p className="pp">
          The chat app I developed using Java, XML, and Firebase is a real-time
          messaging platform with essential features such as user registration,
          authentication, real-time messaging, contact management, online
          status, push notifications and encryption. It offers a secure and
          seamless communication experience, utilizing Firebase's real-time
          database, authentication, cloud messaging, and storage services.The
          repo can be{" "}
          <a href="https://github.com/gauthamgryffindor/mychatapp">
            found here.
          </a>
        </p>
      </div>
      <div className="pro">
        <span className="pt">Music Player</span>
        <p className="pp">
          The music player developed using Java and XML focuses on providing a
          user-friendly interface, playlist management, and essential playback
          controls. It specifically accesses and plays music files stored in the
          internal storage of the device, ensuring a personalized and immersive
          music listening experience.The repo can be{" "}
          <a href="https://github.com/gauthamgryffindor/listeno">found here.</a>
        </p>
      </div>
      <div className="pro">
        <span className="pt">Learner App</span>

        <p className="pp">
          The Learning app I developed using Java, XML, and Firebase connects
          students with mentors for free. It offers features such as user
          registration,communication, profile management, mentorship scheduling
          and resource sharing. The app aims to create a supportive learning
          community by facilitating personalized mentorship connections and
          knowledge exchange between students and mentors. The repo can be{" "}
          <a href="https://github.com/gauthamgryffindor/Learner">found here.</a>
        </p>
      </div>
      <div className="pro">
        <span className="pt">Amazon clone</span>
        <p className="pp">
          The Amazon clone frontend is a React-based interface using Redux for
          state management and Tailwind CSS for styling. It mimics the original
          Amazon website's design and functionalities, featuring components for
          browsing products, a responsive layout for various devices,shopping
          cart capabilities, and a streamlined checkout proces.The repo can be{" "}
          <a href="https://github.com/gauthamgryffindor/amazonclone">
            found here.
          </a>
        </p>
      </div>
    </div>
  );
};
export default project;
