import React, { Component } from 'react';
import { AdSlot, DFPManager } from 'react-dfp';


export default class Example extends Component {
  componentDidMount() {
    setTimeout(() => {
      DFPManager.load('test1', 'test2');
    }, 5000);
    setTimeout(() => {
      DFPManager.load();
    }, 15000);
  }

  render() {
    return (
      <div>
        <div className="desktop-ads">
          <AdSlot slotId="test1" dfpNetworkId="9999" sizes={[[728, 90], [300, 250]]} adUnit="homepage/1" />
        </div>
        <div className="mobile-ads">
          <AdSlot slotId="test2" dfpNetworkId="9999" sizes={[[320, 50], [300, 50]]} adUnit="homepage/mobile" />
        </div>
        <div className="mobile-ads">
          <AdSlot slotId="test3" dfpNetworkId="9999" sizes={[[320, 50], [300, 50]]} adUnit="homepage/mobile/two" />
        </div>
      </div>
    );
  }
}
