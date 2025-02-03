import { APIRoute } from 'astro';

// assetlinks.json.ts
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify([
      {
        relation: ['delegate_permission/common.handle_all_urls', 'delegate_permission/common.get_login_creds'],
        target: {
          namespace: 'android_app',
          package_name: 'com.guzh09.mifulbov2',
          sha256_cert_fingerprints: [
            '8C:34:45:95:14:A0:C1:77:CD:FA:FF:17:E6:60:C9:F9:2D:C9:F7:64:40:DD:8D:08:59:56:41:CD:47:26:56:10',
            '0C:9C:D2:D7:A3:F6:53:76:FC:F8:1E:B0:93:8E:C7:0A:F0:7A:A0:CD:6B:10:C1:88:6F:A9:C5:37:74:FE:CE:C6',
          ],
        },
      },
    ]),
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
};
