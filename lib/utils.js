export function formatRoles(roles) {
	const bundleRoles = roles.edges.map((role) => {
		return role.node.name;
	});
	const formattedRoles = bundleRoles.join(' | ')
	return formattedRoles;
}
