import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

/**
 * Non-linear steppers allow users to enter a multi-step flow at any point.
 *
 * This example is similar to the regular horizontal stepper, except steps are no longer
 * automatically set to `disabled={true}` based on the `activeStep` prop.
 *
 * We've used the `<StepButton>` here to demonstrate clickable step labels.
 */
class HorizontalNonLinearStepper extends React.Component {

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          </div>
        );
      case 1:
        return (
          <div>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          <p>Integer eget finibus tortor. In vestibulum aliquam lorem et auctor. Morbi sed metus ultrices, pulvinar sapien in, pharetra justo. Praesent pretium aliquet mauris, non vehicula odio porttitor a. Nam viverra rutrum porta. Curabitur eleifend augue et ultricies interdum. Sed rutrum ipsum laoreet mi ullamcorper aliquet sed sed ligula. Pellentesque faucibus risus mi, vitae scelerisque massa euismod sit amet. In ac leo arcu. In sed dictum dui. Fusce faucibus, tortor sit amet maximus rhoncus, velit orci rutrum justo, sed fringilla ante dui id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, laoreet vitae justo et, convallis mollis enim. Suspendisse malesuada at urna a feugiat.</p>
          </div>
        );
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                  <div style={{marginTop: 12}}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
              style={{marginRight: 12}}
            />
            <RaisedButton
              label="Next"
              disabled={stepIndex === 2}
              primary={true}
              onTouchTap={this.handleNext}
            />
          </div>
        <Stepper linear={false} activeStep={stepIndex}>
          
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Select campaign settings
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Create an ad group
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Create an ad
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <p>{this.getStepContent(stepIndex)}</p>

        </div>
      </div>
    );
  }
}

export default HorizontalNonLinearStepper;