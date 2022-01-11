const MarkdownInput = ({ markdown, handleChange }) => {
  return (
    <div className="container mx-auto">
      <h2>Editor</h2>
      <textarea
        id="editor"
        className="font-mono w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none h-5/6"
        placeholder="Enter some markdown here..."
        onChange={handleChange}
        value={markdown}
      />
    </div>
  );
};

export default MarkdownInput;
