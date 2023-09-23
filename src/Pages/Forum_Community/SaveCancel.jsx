
const SaveCancel = ({ commentText, setCommentText, setEditMode, handleSaveEdit }) => {
    return (
        <div className="mt-2">
            <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                rows={4}
                className="w-full p-2 border rounded-md"
            />
            <div className=" flex items-center gap-4">
                <button
                    onClick={handleSaveEdit}
                    className="mt-2  ag-blue-500 hover: ag-blue-600  py-2 px-4 rounded-full"
                >
                    Save
                </button>
                <button
                    onClick={() => setEditMode(false)}
                    className="mt-2  ag-red-400  py-2 px-4 rounded-full"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default SaveCancel;