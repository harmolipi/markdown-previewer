const MarkdownPreview = ({ previewText }) => {
  return (
    <div className="container mx-auto">
      <h2>Preview</h2>
      <div
        id="preview"
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none overflow-scroll h-5/6"
        rows="6"
      >
        {previewText}
      </div>
    </div>
  );
};

export default MarkdownPreview;
