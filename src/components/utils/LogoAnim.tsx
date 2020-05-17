import React from 'react';
import sleep from 'sleep-promise';
import Snap from 'snapsvg';
import withStyles from '@material-ui/core/styles/withStyles';
import { default as launchStyles, LogoStyle } from '../styles/launch';

declare var mina;

Snap.plugin(function (Snap, Element, Paper, global) {
  Paper.prototype.circlePath = function (cx, cy, r) {
    let p = 'M' + cx + ',' + cy;
    p += 'm' + -r + ',0';
    p += 'a' + r + ',' + r + ' 0 1,0 ' + (r * 2) + ',0';
    p += 'a' + r + ',' + r + ' 0 1,0 ' + -(r * 2) + ',0';

    return this.path(p, cx, cy);
  };
});

interface LogoAnimProps {
  classes?: any;
  loop?: any;
  radius?: number;
}

class LogoAnim extends React.Component<LogoAnimProps, null> {
  private isLogoRendered: boolean;
  private isAnimRunning: boolean;
  private c1;
  private c2;
  private cPath;
  private cPathLength;
  private svg;
  private radius;

  constructor(props: LogoAnimProps) {
    super(props);

    this.isLogoRendered = false;
    this.isAnimRunning = false;
    this.radius = props.radius ?? LogoStyle.radius;
  }

  componentDidMount() {
    this.loop();
  }

  componentDidUpdate() {
    this.loop();
  }

  async loop() {
    if (typeof this.props.loop === 'number') {
      for (let i = 1; i <= this.props.loop; i++) {
        await this.renderSvg();
        await sleep(1250);
      }
    } else if (this.props.loop === true) {
      while (true) {
        await this.renderSvg();
        await sleep(1250);
      }
    }
  }

  renderSvg() {
    return new Promise(resolve => {
      const halfRadius = this.radius / 2;
      const stopPoint = (halfRadius * 0.4) + halfRadius;
      const c2radius = halfRadius - LogoStyle.stroke * 1.5;

      if (!this.isLogoRendered) {
        this.svg = Snap('#logo');
        this.c1 = this.svg.circle(
          halfRadius, halfRadius, halfRadius - LogoStyle.stroke
        );
        this.c2 = this.svg.circle(
          halfRadius, halfRadius, c2radius
        );
        this.cPath = this.svg.circlePath(
          halfRadius, halfRadius, halfRadius - LogoStyle.stroke
        )
          .attr({ fill: 'none', stroke: 'none' });
        this.cPathLength = this.cPath.getTotalLength();

        this.c1.attr({
          fill: '#bada5500',
          stroke: '#007B9C',
          strokeWidth: LogoStyle.stroke
        });

        this.c2.attr({
          fill: '#FF7600',
          cx: halfRadius,
          cy: halfRadius
        });

        this.isLogoRendered = true;
      }

      if (!this.isAnimRunning) {
        this.isAnimRunning = true;

        this.c2.attr({
          r: c2radius / 2
        });

        const c2anim = (val) => {
          const pos = this.cPath.getPointAtLength(val);

          this.c2.attr({
            cx: pos.x,
            cy: pos.y
          });
        };

        Snap.animate(this.cPathLength, stopPoint, c2anim, 800, mina.easeout, () => {
          Snap.animate(stopPoint, 0, c2anim, 650, mina.easein, () => {
            Snap.animate(0, stopPoint, c2anim, 1000, mina.bounce, () => {
              this.c2.animate({
                r: c2radius
              }, 500, mina.elastic, () => {
                this.isAnimRunning = false;

                resolve();
              });
            });
          });
        });
      }
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" id="logo" className={classes.logo}></svg>
    );
  }
}

export default withStyles(launchStyles)(LogoAnim);
