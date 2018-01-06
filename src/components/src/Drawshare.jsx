import React from 'react';
import { SketchField, Tools } from 'react-sketch';
import styles from './Drawshare.scss';

class Drawshare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.toolbar}>
          Toolbar
        </div>
        <div className={styles.canvas}>
          <SketchField
            width={'600px'}
            height={'600px'}
            tool={Tools.Pencil}
            color={'black'}
            lineWidth={3}
          />
        </div>
      </div>
    );
  }
}

export default Drawshare;
