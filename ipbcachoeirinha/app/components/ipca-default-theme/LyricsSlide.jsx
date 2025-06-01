export function createLyricsSlideSection({ backgroundUrl }) {
    return function _SlideWithBackground(props) {
      return (<section data-background={backgroundUrl}>
          {props.children}
        </section>)
    }
}