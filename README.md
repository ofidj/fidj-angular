# @ofidj/angular

> fidj angular tools
>
> _Renamed from `fidj-angular` at 1.0.0. The old `fidj-angular` and legacy `fidj` packages are deprecated; install `@ofidj/angular`._

```bash
npm install @ofidj/angular
```

Please read the [specifications](./specs).

## History

See [Changelog](./CHANGELOG.md).

## License

MIT

## Account lifecycle

The service delegates `fidjForgotPasswordRequest`, `resetPassword`, `verifyEmail`, and authenticated `resendVerification` to the Node SDK. The existing `forgotPasswordRequest` alias remains supported. Initialize the service before using these methods.
