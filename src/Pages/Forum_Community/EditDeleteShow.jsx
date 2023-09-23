
const EditDeleteShow = ({ showContextMenu, handleContextMenuClick, handleDelete, postComments }) => {
    return (
        <div>
            {showContextMenu && (
                <div className="absolute top-6 right-10 p-3 w-28 rounded-md shadow-md">
                    <ul>
                        <li onClick={() => handleContextMenuClick("Edit")} className="cursor-pointer">
                            Edit
                        </li>
                        <li
                            onClick={() => handleDelete(postComments)}
                            className="cursor-pointer">
                            Delete
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default EditDeleteShow;