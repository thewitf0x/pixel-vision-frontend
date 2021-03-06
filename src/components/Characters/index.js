import React from 'react';

import css from './Characters.module.css';

function Characters({ characters }) {
  const { image1, image2, title1, podcast, ben, tao } = characters;
  return (
    <article className={css.Characters}>
      <img className={css.image} src={image1} />
      <h3 className={css.title}>{title1}</h3>
      <p className={css.text}>{podcast}</p>
      <h3 className={css.title}>Ben</h3>
      <p className={css.text}>{ben}</p>
      <h3 className={css.title}>Tao</h3>
      <p className={css.text}>{tao}</p>
      <img className={css.image} src={image2} />
    </article>
  );
}

export default Characters;
