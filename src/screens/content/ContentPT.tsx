import React from 'react';
import LeftSideBar from 'components/leftSideBar';
import { Loader } from 'components/loader/Loader';
import styles from './Content.module.scss';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import ErrorPopup from 'components/errorPopup';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  vscDarkPlus,
  vs
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import SVG from 'modules/SVG';
import { Content, Heart } from 'modules/types';

const ContentPT = ({
  loading,
  isNight,
  content,
  markdownCheatSheets,
  heart,
  onSetHeart
}: typeContentPT) => {
  return (
    <>
      <Loader loading={loading} />
      <Header />
      <LeftSideBar />
      <ErrorPopup />
      <div
        className={
          isNight ? [styles.wrap, styles.night].join(' ') : styles.wrap
        }
      >
        <div className={styles.innerWrap}>
          <div className={styles.contentInfo}>
            <span>
              <SVG
                type="category"
                width="25px"
                height="25px"
                fill={isNight ? '#fff' : '#000'}
              />
              {content?.CATEGORY}
            </span>
            <span>
              <SVG
                type="time"
                width="20px"
                height="20px"
                fill={isNight ? '#fff' : '#000'}
              />
              {content &&
                (content.UPDATE_DT
                  ? content.UPDATE_DT
                  : content.CREATE_DT
                  ? content.UPDATE_DT
                  : '')}
            </span>
          </div>
          <h1 className={styles.title}>{content ? content.TITLE : ''}</h1>
          <div className={styles.content}>
            <ReactMarkdown
              children={content && content.CONTENT ? content.CONTENT : ''}
              remarkPlugins={[remarkGfm]}
              components={{
                p: 'div',
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      PreTag="div"
                      // showLineNumbers={true}
                      // showInlineLineNumbers={true}
                      style={isNight ? vscDarkPlus : vs}
                    />
                  ) : (
                    <div>
                      {markdownCheatSheets && (
                        <div>
                          {markdownCheatSheets?.map(
                            ({ element, syntax }: any) => {
                              return (
                                <div key={element}>
                                  <h1>{element}</h1>
                                  <p>{syntax}</p>
                                  <div>
                                    <h3>Examples</h3>
                                    <ReactMarkdown
                                      children={syntax}
                                      remarkPlugins={[remarkGfm]}
                                      components={{
                                        code({ children, ...props }) {
                                          return (
                                            <SyntaxHighlighter
                                              // showLineNumbers={true}
                                              // showInlineLineNumbers={true}
                                              children={String(
                                                children
                                              ).replace(/\n$/, '')}
                                              PreTag="div"
                                              style={isNight ? vscDarkPlus : vs}
                                            />
                                          );
                                        }
                                      }}
                                    />
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      )}
                    </div>
                  );
                }
              }}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.heart}>
            <span onClick={onSetHeart}>
              <SVG
                type="heart"
                width="25px"
                height="25px"
                fill={
                  heart !== undefined && heart.IS_HEART > 0 ? '#f00' : '#fff'
                }
              />
            </span>
            <span>{heart !== undefined && heart.COUNT}</span>
          </div>
          <div className={styles.commentBox}>
            <div className={styles.comments}>
              <span>
                <SVG />
              </span>
            </div>
            <div className={styles.createBox}></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

interface typeContentPT {
  loading?: boolean;
  isNight?: boolean;
  content?: Content;
  markdownCheatSheets: Array<string>;
  heart?: Heart;
  onSetHeart: () => void;
}

export default ContentPT;
