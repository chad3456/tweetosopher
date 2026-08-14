/**
 * A modern reading for every fallacy.
 *
 * The brief was that the existing material should carry a modern explanation. A
 * fallacy list dated 1970 is not wrong, but it is inert: the reader recognises the
 * Latin, nods, and does not notice the same move in the reply column an hour later.
 *
 * So each entry answers one question — where does this actually turn up now, and what
 * has changed about how it operates? Three things recur and are worth stating once
 * here rather than thirty-eight times below:
 *
 *   Scale changed the economics. A fallacy that took a rhetorician an afternoon can be
 *   generated in bulk. Brandolini's asymmetry is the reason the reply is losing.
 *
 *   The audience changed. Classical fallacies assume you are trying to convince the
 *   person you are arguing with. Most public argument is now performed for a third
 *   party, which makes moves that persuade nobody present entirely rational.
 *
 *   The medium changed. Quote-tweeting, screenshotting and clipping do the
 *   straw-manning automatically, by removing the context that made a claim reasonable.
 *
 * Where a fallacy has been weaponised as an accusation rather than committed as an
 * error, the entry says so. "That's a straw man" is now more often a way of not
 * answering than a diagnosis, and a reference that does not mention this is teaching
 * the reader a new way to lose an argument badly.
 */

export const FALLACY_MODERN = {
  'ad-hominem': {
    now: 'The dominant form is no longer an insult but a disclosure demand: who funds you, who '
      + 'do you work for, what did you post in 2014. Each can be a legitimate question about '
      + 'evidence and each is usually deployed to make the claim unnecessary to answer.',
    test: 'Ask whether the answer would change your assessment of the claim itself. If any '
      + 'answer leaves the argument exactly where it was, the question was doing other work.',
  },
  'tu-quoque': {
    now: 'The engine of most online moral argument. Every account has a searchable history, so '
      + 'a charge of inconsistency is always available and always cheaper than a rebuttal. The '
      + 'Selective Outrage test on this site is built around the fact that the charge is '
      + 'usually true and usually irrelevant.',
    test: 'Hypocrisy is evidence about a person and not about a proposition. A smoker telling '
      + 'you not to smoke is right.',
  },
  'straw-man': {
    now: 'Largely automated. A quote-tweet, a screenshot or a clip removes the qualifying '
      + 'sentence, and the resulting version is what circulates — often without anyone '
      + 'intending the distortion. The recommendation system then selects for whichever '
      + 'version is most objectionable, because that is what gets replies.',
    test: 'Before replying, find the original in full. If your summary of their view would '
      + 'embarrass them to read, it is not their view yet.',
  },
  'appeal-to-authority': {
    now: 'Inverted. The live problem is no longer excessive deference but a reflex that any '
      + 'appeal to expertise is itself a fallacy — which leaves the reader with nothing but '
      + 'their own reading of a field they have not studied.',
    test: 'Relevant expertise, inside the field, with no contrary consensus, is good evidence. '
      + 'It is a fallacy only when the authority is outside their field or the field disagrees.',
  },
  'appeal-to-popularity': {
    now: 'Metrics made it visible and gameable at once: like counts, view counts and trending '
      + 'lists present popularity as a quality signal, and can be bought. Engagement is also a '
      + 'poor proxy for agreement, since the most-shared reply to a post is frequently an '
      + 'attack on it.',
    test: 'Ask what the number would look like if the claim were false. If it would look the '
      + 'same, it is not evidence.',
  },
  'appeal-to-emotion': {
    now: 'Brady and colleagues found moral-emotional language raises diffusion by around 20% '
      + 'per word, so a platform optimising for spread is selecting for this whether or not '
      + 'anyone intends it. The emotional framing is not added to the argument; it is what '
      + 'determined which argument you saw.',
    test: 'Emotion is not the fallacy — a real atrocity should move you. The fallacy is emotion '
      + 'substituting for the missing step, so ask what the argument would be with the feeling '
      + 'removed.',
  },
  'appeal-to-nature': {
    now: 'Runs in both directions now. It sells supplements and unpasteurised milk, and it also '
      + 'underwrites arguments that a social arrangement is legitimate because it is ancient or '
      + 'because some animal does it.',
    test: 'Cyanide, cholera and infant mortality are natural; insulin and anaesthesia are not. '
      + 'Naturalness has no reliable relationship to goodness in either direction.',
  },
  'genetic-fallacy': {
    now: 'The reflex is now about the source rather than the person: which outlet, which '
      + 'account, which country\'s media. Source quality is real evidence about how much '
      + 'checking to do, and it is not evidence about whether the specific claim is true.',
    test: 'A tabloid can report a real fire. Use the source to set your prior and the '
      + 'verification to settle it.',
  },
  whataboutism: {
    now: 'Fully institutionalised — it is the standard reply of press offices as well as '
      + 'accounts. The reason it works is that the comparison is usually accurate: there '
      + 'genuinely is a worse case somewhere, and pointing at it costs nothing.',
    test: 'A whataboutism can be answered honestly and still not bear on the question. Try '
      + 'saying "yes, that was also wrong" and see whether the original charge has moved.',
  },
  'appeal-to-consequences': {
    now: 'Most visible in arguments about what research should be published or funded, in both '
      + 'political directions. The move is to argue that a finding would be dangerous, and to '
      + 'let that stand in for a reason it is false.',
    test: 'A consequence is a reason to be careful about how something is said, and never a '
      + 'reason to believe it is untrue. Keep the two questions apart out loud.',
  },
  'begging-the-question': {
    now: 'Usually smuggled in through vocabulary rather than structure. Whether you write '
      + '"undocumented" or "illegal", "pro-life" or "anti-abortion", "collateral damage" or '
      + '"civilian deaths" settles most of what was supposedly being argued.',
    test: 'Substitute the other side\'s word and reread. If the argument stops working, the '
      + 'word was carrying it.',
  },
  'false-dilemma': {
    now: 'Manufactured by the format. A quote-tweet, a poll, a for-or-against framing and a '
      + 'timeline that shows you the two loudest positions all collapse a distribution into a '
      + 'pair. Most people hold a third position and rarely see it represented.',
    test: 'Ask who benefits from there being exactly two options, and try to state a third that '
      + 'nobody in the thread has stated.',
  },
  'loaded-question': {
    now: 'The interview form of it is old; the new form is the framing of a poll or a headline, '
      + 'where the presupposition is what is really being tested and the answer distribution is '
      + 'then reported as public opinion.',
    test: 'Refusing to answer looks evasive, which is the point. Name the presupposition '
      + 'explicitly before answering, and answer the honest version.',
  },
  'no-true-scotsman': {
    now: 'The standard defence of any large group after a member does something indefensible — '
      + 'political, religious, or a fandom. The redefinition is usually sincere and made in '
      + 'real time, which is what makes it hard to notice from inside.',
    test: 'Ask whether the definition would have excluded them yesterday. If it was written to '
      + 'exclude them, it is not a definition, it is a response.',
  },
  'moving-goalposts': {
    now: 'Endemic wherever a prediction can be checked. A forecast that fails is reread as '
      + 'having been about something else, and because the original wording is usually vague '
      + 'enough, the reinterpretation is often defensible.',
    test: 'The fix is procedural, not rhetorical: write down in advance what would change your '
      + 'mind, in terms specific enough that someone else could check it.',
  },
  'special-pleading': {
    now: 'Most often about method. A study you dislike is held to a standard of evidence that '
      + 'no study in the field meets, while one you like passes on a press release.',
    test: 'Apply your objection to the last paper you cited approvingly. If it fails too, the '
      + 'objection was not the reason.',
  },
  'motte-and-bailey': {
    now: 'The characteristic structure of contested political vocabulary. A term is used in a '
      + 'strong and contentious sense in practice, and defended in a weak and obvious sense '
      + 'when challenged — then used in the strong sense again once the challenge passes.',
    test: 'Ask what the claim rules out. A version that nobody could disagree with is the '
      + 'motte, and the argument was never about it.',
  },
  unfalsifiability: {
    now: 'The signature of the conspiracy structure, where absence of evidence is read as '
      + 'evidence of a cover-up. The same structure appears in respectable form whenever a '
      + 'theory explains any outcome equally well after the fact.',
    test: 'Ask the holder what observation would count against them. A theory with no answer to '
      + 'that question is not making a claim about the world.',
  },
  'post-hoc': {
    now: 'Manufactured daily by dashboards. A metric moves after a change ships and the change '
      + 'gets the credit, because nobody ran the version where it did not ship. This is the '
      + 'commonest false causal claim in ordinary professional life, well ahead of anything in '
      + 'politics.',
    test: 'Ask what else changed in the same window, and whether the metric had moved that much '
      + 'before for no reason. Usually it had.',
  },
  'correlation-causation': {
    now: 'The slogan is now better known than the reasoning, and is used as a thought-stopper: '
      + 'any inconvenient association is dismissed with it, including ones with a mechanism, a '
      + 'dose-response gradient and a natural experiment behind them.',
    test: 'Correlation is real evidence, just not sufficient. Ask for the specific confounder '
      + 'rather than for the slogan — naming one is a real objection, and gesturing is not.',
  },
  'single-cause': {
    now: 'What a headline is for. Complex outcomes get one driver because one driver fits the '
      + 'sentence, and the resulting explanation then sets the policy that gets argued about.',
    test: 'Ask how much of the variance the named cause would have to explain for the claim to '
      + 'be right, and whether anyone has estimated it.',
  },
  'slippery-slope': {
    now: 'Both overused and under-credited. It is the reflex objection to any incremental '
      + 'change, and it is also sometimes correct — surveillance powers and emergency measures '
      + 'have a documented history of scope creep.',
    test: 'A slope argument is legitimate exactly when a mechanism connects the steps. Demand '
      + 'the mechanism; if the answer is that the first step makes the second thinkable, that '
      + 'is a real mechanism and should be argued about rather than dismissed.',
  },
  'texas-sharpshooter': {
    now: 'Industrialised as p-hacking and as dashboard fishing. With enough dimensions in a '
      + 'dataset, a striking pattern is guaranteed, and the person who finds it usually did not '
      + 'set out to cheat.',
    test: 'Ask how many comparisons were available, not how many were reported. Pre-registration '
      + 'exists because the honest version of this error is undetectable after the fact.',
  },
  'regression-fallacy': {
    now: 'The engine of most before-and-after claims for interventions applied at the extreme: '
      + 'the struggling school, the injured player, the worst-performing region. All of them '
      + 'improve on average whatever you do, so any programme aimed at them appears to work.',
    test: 'If subjects were selected for being extreme, expect improvement with no cause. A '
      + 'control group selected the same way is the only answer.',
  },
  'hasty-generalisation': {
    now: 'What a timeline is optimised to produce. You are shown the most extreme member of a '
      + 'group precisely because it travels, and the sample you form your impression from was '
      + 'selected against representativeness by design.',
    test: 'Ask how this example reached you. If the answer is that it was shared for being '
      + 'shocking, it is not a sample of anything.',
  },
  'anecdotal-evidence': {
    now: 'Structurally advantaged now, because a story has a face and a statistic does not — '
      + 'the identifiable-victim effect in this site\'s glossary is the same finding from the '
      + 'other side. A single video will outweigh a national dataset in almost any argument.',
    test: 'Anecdote is good for existence claims and useless for frequency. Ask which kind of '
      + 'claim is being made.',
  },
  'survivorship-fallacy': {
    now: 'The entire genre of founder interviews, career advice and productivity writing. The '
      + 'people who did the same things and failed are not available for comment, so the '
      + 'advice is assembled from a sample defined by having worked.',
    test: 'Ask what fraction of people who followed this advice ended where the speaker did. '
      + 'Nobody selling the advice knows, which is itself informative.',
  },
  'base-rate-fallacy': {
    now: 'Now a systems problem rather than a reasoning one. Screening tests, fraud detection '
      + 'and content moderation all run on rare events, so even accurate classifiers generate '
      + 'far more false positives than true ones — and the person on the receiving end is told '
      + 'only the accuracy figure.',
    test: 'Ask for the base rate before the accuracy. Restated as counts out of a thousand, the '
      + 'answer usually becomes obvious.',
  },
  'cherry-picking': {
    now: 'No longer needs an author. Search and recommendation will assemble a one-sided '
      + 'evidence base for any position on request, and it will feel like research because you '
      + 'did the reading.',
    test: 'Search for the strongest case against your position by name. If you have never seen '
      + 'it stated well, you have not encountered it.',
  },
  'nirvana-fallacy': {
    now: 'The standard objection to any partial fix — a vaccine that is not perfect, a policy '
      + 'that helps some people, a tool that fails sometimes. Comparison is against an ideal '
      + 'that is not on offer rather than against what happens otherwise.',
    test: 'Insist on naming the alternative. "Compared to what?" resolves most of these in one '
      + 'question.',
  },
  equivocation: {
    now: 'Concentrated in the words a public argument is actually about — "violence", '
      + '"censorship", "safety", "freedom" — each of which has a narrow legal sense and a broad '
      + 'colloquial one, and arguments slide between them without anyone noticing the switch.',
    test: 'Write down the definition being used at the start of the argument, and check it is '
      + 'still the one in use at the end.',
  },
  'ambiguity-fallacy': {
    now: 'The house style of official denials, which are drafted to be technically true and to '
      + 'be read as saying more than they say. It is also increasingly the safest way to write '
      + 'anything in public, because an unambiguous sentence can be quoted against you.',
    test: 'Restate the claim with every ambiguity resolved in the least flattering direction, '
      + 'and ask whether the speaker would accept your version.',
  },
  'definist-fallacy': {
    now: 'The core move of most terminology arguments. Whether something counts as genocide, '
      + 'recession, censorship or a riot is contested precisely because settling the word '
      + 'settles the argument, which is why the definitional fight is where the effort goes.',
    test: 'Separate the two questions explicitly: what happened, and what we call it. Most '
      + 'disputes turn out to be entirely about the second.',
  },
  'loki-fallacy': {
    now: 'The rhetorical immune system of any belief with a persecution narrative attached. '
      + 'Disagreement is reclassified as evidence — you object because you are compromised, '
      + 'programmed, or paid.',
    test: 'Ask what a good-faith objection would look like. If the theory has no room for one, '
      + 'it has stopped being a theory about the world.',
  },
  'affirming-consequent': {
    now: 'The formal skeleton under most conspiracy reasoning and most debugging. If the theory '
      + 'were true we would see X; we see X; therefore the theory. It fails because other '
      + 'causes produce X, and it is persuasive because you thought of only one.',
    test: 'List the other things that would produce the same observation. If the list is not '
      + 'empty, the observation has not confirmed anything.',
  },
  'denying-antecedent': {
    now: 'Everywhere in policy argument. If the measure passes, the harm follows; it did not '
      + 'pass, so we are safe — which ignores every other route to the same harm.',
    test: 'Check whether the conclusion could arrive by another road. Usually it can.',
  },
  'undistributed-middle': {
    now: 'The shape of most guilt-by-association online. They share one property with a group '
      + 'you dislike, therefore they are one. A shared attribute is not a shared identity, and '
      + 'the inference is invalid however unattractive the group.',
    test: 'Name a person you respect who has the same property. There always is one, and that '
      + 'is the whole refutation.',
  },
  'composition-division': {
    now: 'Runs constantly between individuals and aggregates. If everyone saves more the economy '
      + 'can shrink; if everyone stands to see better nobody does. It also runs in reverse, from '
      + 'a statistic about a group to a claim about a person in front of you, which is how a '
      + 'real average becomes a prejudice.',
    test: 'Ask whether the property survives the change of level. Most interesting ones do not.',
  },
};
