import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { providers } from 'ethers';

declare var WalletConnectProvider: any;
declare var Web3Modal: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public step: number = 0;
  public formOne: FormGroup;
  public formTwo: FormGroup;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.formOne = this.fb.group({
      userName: this.fb.control(null),
      password: this.fb.control(null),
      tester: this.fb.control(false),
    });
    this.formTwo = this.fb.group({
      testing: this.fb.control(null),
      testingtwo: this.fb.control(null),
    });
  }

  async connect() {
    localStorage.removeItem('walletconnect');
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: '42cdbf273f72404ca871bce84287a40c',
        },
      },
    };
    console.log(providerOptions);
    let web3Modal = new Web3Modal.default({
      cacheProvider: false, // optional
      providerOptions, // required
    });

    console.log(web3Modal);

    let provider = await web3Modal.connect();

    const web3Provider = new providers.Web3Provider(provider);
    console.log(web3Provider);

    setTimeout(() => {
      const result = provider.request({
        id: 1,
        jsonrpc: '2.0',
        method: 'personal_sign',
        params: [
          `0x${this.toHex('testing')}`,
          web3Provider.provider.selectedAddress,
        ],
      });
    }, 2000);

    //  Create WalletConnect Provider

    //  Enable session (triggers QR Code modal)
    // provider.enable().then(() => {
    //   console.log('here');
    //   //  Wrap with Web3Provider from ethers.js
    //   const web3Provider = new providers.Web3Provider(provider);
    //   console.log(web3Provider);

    //   // Send JSON RPC requests
    //   const result = provider.request({
    //     id: 1,
    //     jsonrpc: '2.0',
    //     method: 'personal_sign',
    //     params: [
    //       `0x${this.toHex('testing')}`,
    //       web3Provider.provider.accounts[0],
    //     ],
    //   });

    //   console.log(result);

    //   // Close provider session
    //   // provider.disconnect();
    // });
  }

  private toHex(stringToConvert: string) {
    return stringToConvert
      .split('')
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');
  }
}
