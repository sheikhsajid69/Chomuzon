import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:500/student/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div>
      <h2>Edit Student</h2>
      {student && (
        <div>
          <p>Name: {student.Name}</p>
          {/* Add form inputs here for editing */}
        </div>
      )}
    </div>
  );
};

export default Edit;