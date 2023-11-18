export interface Weapon {
    uuid: string;
    displayName: string;
    category: string;
    contentTierUuid: string;
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
    skins: Skins[];
}

export interface Skins {
    contentTierUuid: string;
    uuid: string;
    displayName: string;
    displayIcon: string;
    themeUuid: string;
    chromas: [
      {
        uuid: string;
        displayName: string;
        fullRender: string;
        swatch: string;
        streamedVideo: string | null;
        contentTierUuid: string;
      }
    ];
    levels: Levels[];
  };

  export interface Levels {
    uuid: string;
    displayName: string;
    levelItem: string;
    displayIcon: string;
    streamedVideo: string | null;
  }