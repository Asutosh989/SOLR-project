const IoC = require('electrolyte');

/* Use dedicated components dir */
IoC.use(IoC.dir('lib/components'));

/* Use modules as components */
IoC.use(IoC.node_modules());
