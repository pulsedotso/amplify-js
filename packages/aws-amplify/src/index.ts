/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

import Analytics, {
	AnalyticsClass,
	AnalyticsProvider,
	AWSPinpointProvider,
	AWSKinesisProvider,
	AWSKinesisFirehoseProvider,
	AmazonPersonalizeProvider,
} from '@aws-amplify/analytics';
import Auth, { AuthClass } from '@pulse-amplify/amplify-auth';
import Storage, { StorageClass } from '@aws-amplify/storage';
import Cache from '@aws-amplify/cache';
import Interactions, { InteractionsClass } from '@aws-amplify/interactions';
import XR, { XRClass } from '@aws-amplify/xr';
import Predictions from '@aws-amplify/predictions';

import Amplify, {
	ConsoleLogger as Logger,
	Hub,
	JS,
	ClientDevice,
	Signer,
	I18n,
	ServiceWorker,
} from '@aws-amplify/core';

export default Amplify;

Amplify.Auth = Auth;
Amplify.Analytics = Analytics;
Amplify.Storage = Storage;
Amplify.I18n = I18n;
Amplify.Cache = Cache;
Amplify.Logger = Logger;
Amplify.ServiceWorker = ServiceWorker;
Amplify.Interactions = Interactions;
Amplify.XR = XR;
Amplify.Predictions = Predictions;

export {
	Auth,
	Analytics,
	Storage,
	I18n,
	Logger,
	Hub,
	Cache,
	JS,
	ClientDevice,
	Signer,
	ServiceWorker,
	Interactions,
	XR,
	Predictions,
};

export {
	AuthClass,
	AnalyticsClass,
	StorageClass,
	InteractionsClass,
	XRClass,
	AnalyticsProvider,
	AWSPinpointProvider,
	AWSKinesisProvider,
	AWSKinesisFirehoseProvider,
	AmazonPersonalizeProvider,
};
