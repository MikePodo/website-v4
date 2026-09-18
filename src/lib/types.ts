export interface WorkStat {
	value: string;
	label: string;
}

export interface WorkHighlight {
	title: string;
	description: string;
}

export interface WorkSection {
	title: string;
	description?: string;
	stats?: WorkStat[];
	highlights?: WorkHighlight[];
}

export interface WorkEntry {
	company: string;
	period: string;
	role: string;
	/** Extra meta lines shown under the role, e.g. contract terms or location. */
	details?: string[];
	sections: WorkSection[];
	stack?: string[];
}
