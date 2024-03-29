import React from 'react';
import LeftSideBar from 'components/leftSideBar';
import Loader from 'components/loader/Loader';
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
import { Content, Heart, Comment } from 'modules/types';
import ConfirmPopup from 'components/confirmPopup/ConfirmPopup';
import CreateCommentBox from 'components/createCommentBox/CreateCommentBox';

const ContentPT = ({
  loading,
  isNight,
  content,
  markdownCheatSheets,
  heart,
  commentList,
  nickName,
  password,
  comments,
  isSecret,
  reNickName,
  rePassword,
  reIsSecret,
  reComments,
  isReComment,
  isConfirmPopupActive,
  confirmMessage,
  confirmType,
  onSetHeart,
  onSetNickName,
  onSetPassword,
  onSetComments,
  onSetIsSecret,
  onSetReNickName,
  onSetRePassword,
  onSetReComments,
  onSetReIsSecret,
  onSetIsReComment,
  onConfirmBtn,
  onCreateComment,
  onOpenUpateDeleteWindow
}: typeContentPT) => {
  return (
    <>
      <Loader />
      <Header />
      <LeftSideBar />
      <ErrorPopup />
      <ConfirmPopup
        isActive={isConfirmPopupActive}
        confirmMessage={confirmMessage}
        confirmType={confirmType}
        onConfirm={onConfirmBtn}
      />
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
          <div className={styles.crossBar} />
          <div className={styles.commentBox}>
            <div className={styles.comments}>
              {Array.isArray(commentList) &&
                commentList.length > 0 &&
                commentList.map((comment, idx) => (
                  <div key={comment.ID}>
                    <div
                      className={
                        comment.REF_ID !== null
                          ? [styles.comment, styles.padding].join(' ')
                          : styles.comment
                      }
                    >
                      <div className={styles.photo}>
                        <span>
                          <SVG
                            type="user"
                            width="35px"
                            height="35px"
                            fill={isNight ? '#fff' : '#000'}
                          />
                        </span>
                      </div>
                      <div className={styles.commentContents}>
                        <div className={styles.topContents}>
                          <div className={styles.leftContents}>
                            <strong>{`${comment.NICKNAME}`}</strong>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
                            <span>
                              {`${
                                comment.UPDATE_DT
                                  ? comment.UPDATE_DT
                                  : comment.CREATE_DT
                              }`}
                            </span>
                          </div>
                          <div className={styles.rightContents}>
                            <span
                              onClick={() =>
                                onOpenUpateDeleteWindow(comment.ID)
                              }
                            >
                              {/* 수정/삭제 */}
                              삭제
                            </span>
                            <span
                              onClick={() =>
                                onSetIsReComment(
                                  comment.REF_ID !== undefined &&
                                    comment.REF_ID !== null &&
                                    comment.REF_ID > -1
                                    ? comment.REF_ID
                                    : comment.ID
                                )
                              }
                            >
                              댓글
                            </span>
                          </div>
                        </div>
                        <div className={styles.bottomContents}>
                          {comment.COMMENTS}
                        </div>
                      </div>
                    </div>
                    {(commentList[idx + 1] === undefined ||
                      commentList[idx + 1].REF_ID === undefined ||
                      commentList[idx + 1].REF_ID === null) && (
                      <div className={styles.crossBar} />
                    )}
                    {isReComment === comment.ID && (
                      <div className={styles.reCommentBoxWrap}>
                        <div className={styles.reCommentBox}>
                          <CreateCommentBox
                            nickName={reNickName}
                            password={rePassword}
                            isSecret={reIsSecret}
                            comments={reComments}
                            isDoing={isReComment > -1 ? isReComment : undefined}
                            onSetNickName={onSetReNickName}
                            onSetPassword={onSetRePassword}
                            onSetComments={onSetReComments}
                            onSetIsSecret={onSetReIsSecret}
                            onSetIsDoing={
                              isReComment > -1 ? onSetIsReComment : undefined
                            }
                            onCreateComment={onCreateComment}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <CreateCommentBox
              nickName={nickName}
              password={password}
              isSecret={isSecret}
              comments={comments}
              onSetNickName={onSetNickName}
              onSetPassword={onSetPassword}
              onSetComments={onSetComments}
              onSetIsSecret={onSetIsSecret}
              onCreateComment={onCreateComment}
            />
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
  commentList?: Array<Comment>;
  nickName: string;
  password: string;
  comments: string;
  isSecret: string;
  reNickName: string;
  rePassword: string;
  reComments: string;
  reIsSecret: string;
  isReComment: number;
  isConfirmPopupActive: boolean;
  confirmMessage: string;
  confirmType?: string;
  onSetHeart: () => void;
  onSetNickName: React.Dispatch<React.SetStateAction<string>>;
  onSetPassword: React.Dispatch<React.SetStateAction<string>>;
  onSetComments: React.Dispatch<React.SetStateAction<string>>;
  onSetIsSecret: React.Dispatch<React.SetStateAction<string>>;
  onSetReNickName: React.Dispatch<React.SetStateAction<string>>;
  onSetRePassword: React.Dispatch<React.SetStateAction<string>>;
  onSetReComments: React.Dispatch<React.SetStateAction<string>>;
  onSetReIsSecret: React.Dispatch<React.SetStateAction<string>>;
  onSetIsReComment: (commentId: number) => void;
  onConfirmBtn: (type?: string) => void;
  onCreateComment: () => void;
  onOpenUpateDeleteWindow: (commentId: number) => void;
}

export default ContentPT;
