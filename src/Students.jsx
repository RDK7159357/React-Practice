import PropTypes from 'prop-types';

function Students({ name = "Guest", age = 0, isStudent = false }) {
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

// Students.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false,
// };

export default Students;
