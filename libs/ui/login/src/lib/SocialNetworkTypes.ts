export enum SocialNetwork {
  GooglePlus,
  Instagram
}

export type Style = {
  className: string;
  icon: string;
}

export const socialNetworkStyles: { [key in SocialNetwork]: Style } =
{
  [SocialNetwork.GooglePlus]: { className: 'btn-google', icon: 'fa fa-google' },
  [SocialNetwork.Instagram]: { className: 'btn-instagram', icon: 'fa fa-instagram' },
}
