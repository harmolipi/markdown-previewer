import { marked } from 'marked';

const MarkdownPreview = ({ previewText }) => {
  marked.setOptions({ breaks: true });

  return (
    <div className="container mx-auto">
      <h2>Preview</h2>
      <div
        id="preview"
        className="prose w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none overflow-scroll h-5/6"
        rows="6"
        dangerouslySetInnerHTML={{ __html: marked.parse(previewText) }}
      ></div>
    </div>
  );
};

export default MarkdownPreview;
