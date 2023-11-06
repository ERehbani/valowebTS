export interface Weapon {
  uuid: string;
  displayName: string;
  category: string;
  displayIcon: string;
  weaponStats: {
    fireRate: number;
    magazineSize: number;
    equipTimeSeconds: number;
    reloadTimeSeconds: number;
  };
  damageRanges: [
    {
      rangeStartMeters: number;
      headDamage: number;
      bodyDamage: number;
      legDamage: number;
    },
    {
      rangeStartMeters: number;
      headDamage: number;
      bodyDamage: number;
      legDamage: number;
    }
  ];
  shopData: {
    cost: number;
    category: string;
    newImage: string;
  };
  skins: [
    {
      uuid: string;
      displayName: string;
      displayIcon: string;
      chromas: [
        {
          uuid: string;
          displayName: string;
          fullRender: string;
          streamedVideo: string | null;
        }
      ];
      levels: [
        {
          uuid: string;
          displayName: string;
          displayIcon: string;
          streamedVideo: string | null;
        }
      ];
    }
  ];
}
