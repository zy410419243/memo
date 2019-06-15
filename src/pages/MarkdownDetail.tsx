import React from 'react';
import Markdown from 'react-markdown/with-html';

export interface MarkdownDetailProps {
  dataSource: string;
}

export default (props: MarkdownDetailProps) => (
  <div
    style={{
      height: '95vh',
      overflow: 'auto',
      padding: '5px 24px',
      fontSize: 16,
    }}
  >
    <Markdown source={props.dataSource} escapeHtml={false} />
  </div>
);
